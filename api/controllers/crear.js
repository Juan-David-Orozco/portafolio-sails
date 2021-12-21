module.exports = {


  friendlyName: 'Crear',


  description: 'Crear something.',


  inputs: {

  },


  exits: {
    success: {
      responseType: 'redirect'
    }

  },


  fn: async function (inputs, exits) {

    const nuevo = await Articulo.create({
      marca: "pera",
      modelo: "ipon17",
      descripcion: "Bueno",
      precio: 100,
      usuario: 1
    })
    
    return exits.success("/");

  }


};
