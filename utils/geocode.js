const request = require('request')


const geocode = (address, callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + decodeURIComponent(address) + ".json?access_token=pk.eyJ1Ijoib3Nrb3JwIiwiYSI6ImNrdXkybmFyaTB6dHUycXJmN3lkbnA5ZmUifQ.uA4fi77wM-IAwfpuZi5hPg"
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback("Unable to connect", undefined)
        }
        else if (response.body.address === 0) {
            callback("Location not found", undefined)

        } else {

            callback(
                long = response.body.features[0].center[0]
                , lati = response.body.features[0].center[1]
                , place = response.body.features[0].place_name
            )

        }
    })
}


module.exports = geocode