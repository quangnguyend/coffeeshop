var distance = require("map-distance")
module.exports = {
    getDistance: (place, res) => {
        let {geoCity, geoCityTo} = place;
        distance({
            from: geoCity,
            to: geoCityTo,
            mode: 'driving'
          }, 
          function (err, data){
                if(data) {
                    let km = parseInt(data.meters) / 1000;
                    respond = geoCity + " to " + geoCityTo + " is: " + km + " km"
                    return res.send({
                        speech: respond,
                        displayText: 'Something went wrong!',
                        source: 'S3corp.com.vn'
                    });
              }
              return res.send({
                speech: "Can not find you located",
                displayText: 'Something went wrong!',
                source: 'S3corp.com.vn'
              });

            console.log(data)
          })
    }
};