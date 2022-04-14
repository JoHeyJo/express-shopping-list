const express = require("express");
const db = require("./fakeDb");
const router = new express.Router();

/** GET /items: get list of items */
router.get("/", function (req, res) {
  let allItems = [];
  const items = db.items;
  debugger
  for(let i of db.items){
    // debugger;
    allItems.push({ name: i.name, price: i.price })
    // debugger;
  }
    return res.json({
      items: allItems
    });
  

});

router.post("/", function (req,res, next){}

/** DELETE /users/[id]: delete user, return {message: Deleted} */
router.delete("/:id", function (req, res) {
  db.User.delete(req.params.id);
  return res.json({ message: "Deleted" });
});

module.exports = router; 