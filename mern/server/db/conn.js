const { MongoClient } = require("mongodb");
const Db = process.env.ATLAS_URI;

const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var _db;

module.exports = {
  connectToServer: async function (callback) {
    try {
      const db = await client.connect();
      _db = db.db("employees");
      console.log("Successfully connected to MongoDB.");
      return callback();
    } catch (err) {
      return callback(err);
    }
  },

  getDb: function () {
    return _db;
  },
};
