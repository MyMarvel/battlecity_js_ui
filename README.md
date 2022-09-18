# Battle City

## Installation

Download a sprite file from https://static.codedojo.ru/projects/battlecity/sprite.png (thanks @vrobik for it) and place it under assets/ subfolder, so you should have something like battlecity/assets/sprite.png

Download a stomp library to interact with rabbitmq server from here https://github.com/rabbitmq/rabbitmq-web-stomp-examples/blob/master/priv/stomp.js and place it under vendor/ subfolder, so you should have something like battlecity/vendor/stomp.js. You can find additional information about this plugin here https://www.rabbitmq.com/web-stomp.html

Install docker and execute "docker-compose -f docker-compose.yml up" to get a proper rabbitmq server instanse up and working.

Then make the project's folder be accessible from any web server, like apache/nginx/whatever. For example, you can install a 'Live Server' extention for VS Code, and then do a right click inside the index.html -> Open with Live Server

## Troubleshooting

If you got a CORS policy error in console, you need to use a web server instead of just opening the file in the browser (the path should be like http://whatever, not file://whatever)
