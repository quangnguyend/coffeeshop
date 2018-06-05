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
      res.send("aaaaaaaaaaaaaaaaaaaaaaaaa dsdsds")
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
