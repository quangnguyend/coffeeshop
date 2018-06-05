var weather = require('weather-js');
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
    if(req.body.result.action && req.body.result.action == "order.entertainment") {
      //let { entertainment, geoCity } = req.body.parameters;
      // weather.find({search: "Ho Chi Minh", degreeType: 'F'}, function(err, result) {
      //   if(err) console.log(err);
       
      //   console.log(result[]);
      // });
      res.json({
        speech: 'Something went wrong!',
        displayText: 'Current: 20\n\nTomoroow:30',
        source: 'team info'
    });
    }
    else {
      res.status(422).send({error : "phèo lơ rồi"})
    }
    // dbs.staging.collection('drinktbl').find({}).toArray((err, docs) => {
    //   if (err) {
    //     console.log(err)
    //     res.error(err)
    //   } else {
    //     res.json(docs)
    //   }
    // })
  })

  // app.post('/staging', (req, res) => {
  //   dbs.staging.collection('drinktbl').insert()
  //   dbs.staging.collection('drinktbl').find({}).toArray((err, docs) => {
  //     if (err) {
  //       console.log(err)
  //       res.error(err)
  //     } else {
  //       res.json(docs)
  //     }
  //   })
  // })

  return app
}
