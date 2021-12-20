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
      descripcion: "Mal estado",
      marca: "red",
      modelo: "Z1",
      precio: 80
    })
    
    return exits.success("/");

  }


};
