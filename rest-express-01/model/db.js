const MongoClient = require('mongodb').MongoClient;
module.exports = () => {
  return new MongoClient('mongodb://mongo/rest-example');
};
