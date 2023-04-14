const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This section will help you get a list of all the records.
recordRoutes.route("/record").get(async function (req, res) {
  let db_connect = dbo.getDb();
  const result = await db_connect.getCollection("records").findMany().toArray();

  return res.json(result);
});

// This section will help you get a single record by id
recordRoutes.route("/record/:id").get(async function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { filter: { _id: req.params.id } };
  const result = await db_connect.getCollection("records").findOne(myquery);

  return res.json(result);
});

// This section will help you create a new record.
recordRoutes.route("/record/add").post(async function (req, res) {
  let db_connect = dbo.getDb();
  let myobj = {
    name: req.body.name,
    position: req.body.position,
    level: req.body.level,
  };

  const result = await db_connect.getCollection("records").insertOne(myobj);
  res.json(result);
});

// This section will help you update a record by id.
recordRoutes.route("/update/:id").post(async function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = {
    filter: { _id: req.params.id },
    fields: {
      $set: {
        name: req.body.name,
        position: req.body.position,
        level: req.body.level,
      },
    },
  };
  const result = await db_connect.getCollection("records").updateOne(myquery);

  console.log("1 document updated");
  res.json(result);
});

// This section will help you delete a record
recordRoutes.route("/:id").delete(async (req, res) => {
  let db_connect = dbo.getDb();
  let myquery = { filter: { _id: req.params.id } };
  const result = await db_connect.getCollection("records").deleteOne(myquery);

  res.json(result);
});

module.exports = recordRoutes;
