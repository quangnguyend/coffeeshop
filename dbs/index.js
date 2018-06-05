const MongoClient = require('mongodb').MongoClient

const PROD_URI = "mongodb://minhtran:123456789@ds237815.mlab.com:37815/nba"
const STAG_URI = "mongodb://coffeeshop:abc123456@ds223009.mlab.com:23009/angular5"

function connect(url) {
  return MongoClient.connect(url).then(client => client.db())
}

module.exports = async function() {
  let databases = await Promise.all([connect(PROD_URI), connect(STAG_URI)])

  return {
    production: databases[0],
    staging: databases[1]
  }
}
