const { Owner } = require("../../../db");

async function getOwner(req, res, next) {
    const {email} = req.params
    console.log(email, 'soy id')
  try {
    console.log('entro al controller')
   const owner = await Owner.findOne(
    {
       where:{
           email: email
       }}
      )
    res.json({msg: owner }).status(200);
  } catch (err) {
    console.log(err, 'error')
    res.status(400).json({msg:'no se encontro nada'});
  }
}

module.exports = {
  getOwner,
};