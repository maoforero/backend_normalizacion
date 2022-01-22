const controller = {};

controller.index = (req, res) => {
  res.send("products");
};

module.exports = controller