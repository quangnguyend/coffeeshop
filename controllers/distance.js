var distance = require('google-distance');
var weather = require('weather-js');
module.exports = {
    getDistance: (place, res) => {
        weather.find({search: place, degreeType: 'F'}, function(err, result) {
            if(err) console.log(err);
           
            console.log(JSON.stringify(result, null, 2));
        });
    }
};