const express = require("express");
const cors = require("cors");
const User = require("./config");
const { query } = require("express");
const app = express();
app.use(express.json());
app.use(cors());
//照時間排序
app.get("/orderdata", async (req, res) => {
  const orderdate= await User.orderBy('date','desc').limit(5).get();
  const list2 = orderdate.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  res.send(list2);
});
app.get("/TUM", async (req, res) => {
  const orderdate= await User.orderBy('date','desc').limit(1).get();
  const list2 = orderdate.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  res.send(list2);
});

//  app.post("/create", async (req, res) => {
//    const data = req.body;
//    await User.add({ data });
//    res.send({ msg: "User Added" });
//  })
//  app.post("/update", async (req, res) => {
//    const id = req.body.id;
//    delete req.body.id;
//    const data = req.body;
//    await User.doc(id).update(data);
//    res.send({ msg: "Updated" });
//  })
//  app.post("/delete", async (req, res) => {
//    const id = req.body.id;
//    await User.doc(id).delete();
//    res.send({ msg: "Deleted" });
//  });
app.listen(4000, () => console.log("Up & RUnning *4000"));
