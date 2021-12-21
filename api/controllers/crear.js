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

    const nuevo = await Usuario.create({
      nombre: "Juan",
      email: "juan@email.com"
    })
    
    return exits.success("/");

  }


};
