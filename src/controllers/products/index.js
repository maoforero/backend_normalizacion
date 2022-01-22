const Data =  require('../../../list.json');
const controller = {};

controller.index = (req, res) => {
  res.send(Data);
};

controller.post = (req, res) => {
  const body = req.body;
  res.json({
    msg: 'objeto creado',
    data: 'gg'
  });
}

controller.put = (req, res) => {
  const {idItem} = req.params;
  const item = Data.find((item) => item.id === idItem);
  if(item){
    const {id, name, price} = req.body;
    item.id = id;
    item.name = name;
    item.price = price;
    res.json({
      msg: `Item ${id} update`
    });
    return;
  }
  res.json({msg:`Item Unknow`})
}

controller.delete = (req, res) => {
  const idItem = Data.find((idItem) => (idItem.id = req.params.id));
  id(idItem){
    idItem.splice(idItem, 1);
    res.json({msg: `Item ${idItem} deleted`});
  }
  res.json({msg: `Item ${idItem} unknow`});
}

module.exports = controller