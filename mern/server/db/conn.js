const { Tigris } = require("@tigrisdata/core");

const client = new Tigris();

var _db;

module.exports = {
  connectToServer: async function (callback) {
    try {
      _db = await client.getDatabase();
      console.log("Successfully connected to Tigris.");
      return callback();
    } catch (err) {
      return callback(err);
    }
  },

  getDb: function () {
    return _db;
  },
};
