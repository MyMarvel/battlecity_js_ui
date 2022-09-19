
import { STOMP_CREDENTIALS, RABBITMQ_CHANNELS } from './constants.js'

export default class Network {
    constructor() {
        this.isHost = false;
        this.gameSesionId = null;
        this.stompClient = Stomp.client(STOMP_CREDENTIALS.url);
        this.init();
    }

    async init() {
        this.stompClient.heartbeat.incoming = 0;
        this.stompClient.heartbeat.outgoing = 0;
        
        var on_connect = function() {
            this.initGame();
        };
        var on_error =  function(e) {
            console.log('Error:', e);
            if (e.toString().startsWith('Whoops! Lost connection to ws')) {
                /*
                this.stompClient.disconnect(function() {
                    //console.log('Reconnecting...');
                    //this.stompClient.connect(STOMP_CREDENTIALS.user, STOMP_CREDENTIALS.pass, on_connect.bind(this), null, '/');
                }.bind(this));
                */
            }
        };
        this.stompClient.connect(STOMP_CREDENTIALS.user, STOMP_CREDENTIALS.pass, on_connect.bind(this), on_error.bind(this), '/');
        // We have to wait for answers from network about the current game so we can use game message queues
        await this._waitForSessionId();
    }

    send(exchangeName, data) {
        this.stompClient.send(exchangeName, {"content-type":"json"}, JSON.stringify(data));
    }

    subscribe(channelName, func, headers) {
        this.stompClient.subscribe(channelName, func, headers);
    }

    initGame() {
        this.subscribe(
            '/amq/queue/PlayersExistQueque',
            this._getPlayerSession.bind(this),
            {
                'ack': 'client',
                'prefetch-count': 1,
                'x-stream-offset': 'last'
            }
        )
        /*
        let connectChannelName = RABBITMQ_CHANNELS.generatedGameSession + 'connect';
        this.subscribe(connectChannelName, function(data) {
            try {
                data = JSON.parse(data);
            }
            catch(e) {
                console.log(e);
            }
            console.log(data.playerName);
            if (data.playerName != 'player1') {
                console.log('Player 2 connected', data);
            }
        });
        this.send(connectChannelName, { playerName: 'player1'});
        setTimeout(function() {
            if (this.isHost === null) {
                this.isHost = true;
            }
        }, 500);
        */
    }

    _generateRandomId(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    _getPlayerSession(frame) {
        let playersInfo = JSON.parse(frame.body);
        let currentAmountOfPlayers = playersInfo.currentPlayer;
        this.gameSesionId = playersInfo.sessionId;

        let myPlayerNumber = parseInt(currentAmountOfPlayers) + 1;

        if (myPlayerNumber > 2) {
            myPlayerNumber = 1; // Currently we support only 2 players
            this.gameSesionId = this._generateRandomId(32); // We should generate a new session for this new game
            this.isHost = true;
        }

        // Save our player's data so the next player will get it
        this.send(
            '/exchange/PlayersExistExchange',
            {
                currentPlayer: myPlayerNumber,
                sessionId: this.gameSesionId
            }
        );
        console.log("Player ID: " + myPlayerNumber);
        console.log("Session ID: " + this.gameSesionId);
    }

    async _waitForSessionId(){
        while(this.gameSesionId === null) {
            await new Promise(resolve => setTimeout(resolve, 50));
        }
    }
}