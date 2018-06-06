var weather = require('weather-js');
module.exports = {
    getWeather: (place, res) => {
        weather.find({search: place, degreeType: 'F'}, function(err, result) {
            if(err) console.log(err);
            let objWeather = result[0].current;
            let respond = objWeather.observationpoint + " - temperature: " + objWeather.temperature;
            respond += " - windspeed: " + objWeather.windspeed + "- humidity:" + objWeather.humidity;
            return res.send({
                speech: respond,
                displayText: 'Something went wrong!',
                source: 'S3corp.com.vn'
              });
        });
    }
};