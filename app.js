const request = require('request')


// const url = "http://api.weatherstack.com/current?access_key=1889687260abb311449f6b591f74a4b1&query="

// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log("Unable to connect please check your network")
//     } else if (response.body.error) {
//         console.log("Unable to find location")
//     }
//     else {
//         console.log("Tempreture in mumbai is " + response.body.current.temperature)

//     }

// })


// const newUrl = "http://api.weatherstack.com/current?access_key=1889687260abb311449f6b591f74a4b1&query=Delhi"
// request({ url: url, json: true }, (error, response) => {
//     const long = response.body.location.lat
//     const lati = response.body.location.long
//     console.log("longitude of delhi is " + long + "Latitude of delhi is" + lati)
// })


geocode('Goa', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})
