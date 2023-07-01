let fileIO = require("./fileIO");
let userModel = require("./models/user.model");

module.exports = function(app) {
  app.get("/getData", function(req, res) {
    fileIO.read(function(data) {
      console.log(data);
      res.send(data);
    });
  });

  app.post("/postData", function(req, res) {
    console.log(req.body);
    fileIO.post(req.body, function(data) {
      res.send(data);
    });
  });

  app.get("/user", (req, res) => {
    res.json(userModel.users);
  });

  app.get("/user/:id", (req, res) => {
    const userId = req.params.id;
    const data = userModel.fetchUser(userId);
    res.json(data);
  });

  app.post("/user", ({ body }, res) => {
    userModel.createUser(body);
    res.json(body);
  });

  app.put("/user", ({ body }, res) => {
    userModel.updateUser(body);
    res.json(body);
  });

  app.delete("/user", ({ body }, res) => {
    userModel.deleteUser(body);
    res.sendStatus(204);
  });
};
