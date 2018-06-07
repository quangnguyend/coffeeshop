let ctrWeather = require('../controllers/weather');
let ctrDistance = require('../controllers/distance');
module.exports = function(app, dbs) {

  app.get('/production', (req, res) => {
    dbs.production.collection('test').find({}).toArray((err, docs) => {
      if (err) {
        console.log(err)
        res.error(err)
      } else {
        res.json(docs)
      }
    })
  })

  app.post('/', (req, res) => {
    let objRs = {
      speech: 'Something went wrong!',
      displayText: 'Something went wrong!',
      source: 'S3corp.com.vn'
    }
    if(!req.body.result && !req.body.result.action) {
      return res.json(objRs);
    }
    let { action, parameters } = req.body.result;
    switch(action) {
      case "order.entertainment":
        if(parameters.entertainment === "weather") {
          ctrWeather.getWeather(parameters.geoCity, res);
        }
        if(parameters.entertainment === "distance") {
          ctrDistance.getDistance(parameters, res);
        }
        break;
      default:
        return res.json(objRs);
        break;
    }
    // dbs.staging.collection('drinktbl').find({}).toArray((err, docs) => {
    //   if (err) {
    //     console.log(err)
    //     res.error(err)
    //   } else {
    //     res.json(docs)
    //   }
    // })
  });
  return app
}
