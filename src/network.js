
import { STOMP_CREDENTIALS, RABBITMQ_CHANNELS } from './constants.js'

export default class Network {
    constructor() {
        this.connected = false;
        this.stompClient = Stomp.client(STOMP_CREDENTIALS.url);
        this.init();
    }

    init() {
        this.stompClient.heartbeat.incoming = 0;
        this.stompClient.heartbeat.outgoing  = 0;
        
        var on_connect = function(x) {
            this.connected = true;
            this.stompClient.subscribe(RABBITMQ_CHANNELS.tank1, function(d) {
                console.log(d.body); // TODO
            });
        };
        var on_error =  function(e) {
            console.log('Error', e);
        };
        this.stompClient.connect(STOMP_CREDENTIALS.user, STOMP_CREDENTIALS.pass, on_connect.bind(this), on_error, '/');
    }

    send(data) {
        if (this.connected) {
            this.stompClient.send(RABBITMQ_CHANNELS.tank1, {"content-type":"json"}, data);
        }
    }
}