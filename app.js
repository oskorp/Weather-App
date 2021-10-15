const request = require('request')


const url ="http://api.weatherstack.com/current?access_key=1889687260abb311449f6b591f74a4b1&query=Mumbai"

request({url : url, json : true},(error,response)=>{
    console.log("Tempreture in mumbai is "+ response.body.current.temperature)
})