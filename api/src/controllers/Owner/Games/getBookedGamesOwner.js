const { Games, Complex, Field } = require("../../../db.js");

async function getBookedGamesByOwner (req, res){
    const {id} = req.params;
      try {
       const getComplex = await Complex.findAll({
          where:{ownerId : id},
          include : [{model:Field}]
        });
        console.log('soy getcomplex.fields', getComplex?.fields)
        console.log('soy getcomplex.fields[0]', getComplex?.fields[0])
        console.log('soy getcomplex[0].fields', getComplex[0]?.fields)

        const bookedGames = await Games.findAll({
          where:{fieldId : getComplex.fields.id}
        });

        res.status(200).json(bookedGames);
      } catch (e) {
        console.log(e);
        res.status(400).json({ msg: "no hay reservas" });
      }
}

module.exports = {
    getBookedGamesByOwner,
};