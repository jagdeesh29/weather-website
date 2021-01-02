const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat='+latitude + '&lon=' +longitude+ '&appid=e733740b89d14e991821249aa8183ba4'
    console.log(url)
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.weather[0].description + ' It is currently ' + body.main.temp + ' degress out. There is a ' + body.clouds.all + '% chance of rain.')
        }
    })
}

module.exports = forecast