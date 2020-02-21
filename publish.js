var mqtt = require('mqtt')
var client  = mqtt.connect('ws://127.0.0.1:9001')
 
client.on('connect', function(){
  setInterval(function(){
    var suhu = Math.floor((Math.random() * 100)+1);
    var today = new Date();
    var time = ("0" + today.getHours()).slice(-2) + "." + ("0"+today.getMinutes()).slice(-2) + "." + ("0"+today.getSeconds()).slice(-2);

    var pubs ={
        "suhu": suhu.toString(),
        "waktu" : time.toString()
    }

    client.publish('sensor/suhu',JSON.stringify(pubs), {qos:1});
    console.log(pubs);
  },1000); 

});