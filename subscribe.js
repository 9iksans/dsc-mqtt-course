// var mqtt = require('mqtt')
var client  = mqtt.connect('ws://localhost:9001')


client.on('connect', function () {
    client.subscribe('sensor/suhu',{qos:1});
    console.log('client has subscribed successfully');
  });

client.on('message', function (topic, message){
    var value = JSON.parse(message.toString());
    console.log(value ); //if toString is not given, the message comes as buffer
    document.getElementById("hasilsuhu"). innerHTML = "suhu " + value.suhu.toString() + " Celcius";
    document.getElementById("hasilwaktu"). innerHTML = "at " + value.waktu.toString();
  });