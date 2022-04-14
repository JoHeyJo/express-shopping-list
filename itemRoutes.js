const { request } = require("express");
const express = require("express");
const db = require("./fakeDb");
const router = new express.Router();

/** GET /items: get list of items */
router.get("/", function (req, res) {
  let allItems = [];
  const items = db.items;
  for (let i of db.items) {
    allItems.push({ name: i.name, price: i.price });
  }
  return res.json({ items: allItems });
});

/** POST /items: add item and return it */
router.post("/", function (req, res) {
  db.items.push(req.body);
  return res.json({ added: req.body });
});

/** GET /items/:name: return single item */
router.get("/:name", function (req, res) {
  let name = req.params.name;

  for (let item of db.items) {
    if (name === item.name ) {
      return res.json({ item });
    }
  }
});

/** PATCH /items/:name modify item and return it */
router.patch("/:name", function (req, res) {
  let name = req.params.name;

  for (let dbItem of db.items) {
    if ( name === dbItem.name ) {
     item = {
        name: req.body.name || dbItem.name,
        price: req.body.price || dbItem.price
      };
      db.items.name = item
      console.log(db.items.name);
      return res.json({ updated: req.body })
    }
  };
});


/** DELETE /:name delete item, return {message: Deleted} */
router.delete("/:name", function (req, res) {
  //find object in the array, index
  //delete it by index
  let name = req.params.name;

  if ()
  let index = db.items.indexOf(name)

  console.log("INDEX=", index);
  db.User.delete(req.params.id);
  return res.json({ message: "Deleted" });
});

module.exports = router;