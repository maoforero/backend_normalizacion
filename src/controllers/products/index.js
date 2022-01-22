const controller = {};

controller.index = (req, res) => {
  res.send("products");
};

controller.post = (req, res) => {
  const body = req.body;
  res.json({
    msg: 'objeto creado',
    data: 'gg'
  })
}

module.exports = controller