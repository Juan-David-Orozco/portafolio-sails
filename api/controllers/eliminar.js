module.exports = {


  friendlyName: 'Eliminar',


  description: 'Eliminar something.',


  inputs: {

  },


  exits: {
    success: {
      responseType: 'redirect'
    }

  },


  fn: async function (inputs, exits) {

    let articulo = await Articulo.destroy({id:3})
    return exits.success("/");

  }


};
