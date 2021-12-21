module.exports = {


  friendlyName: 'Editar',


  description: 'Editar something.',


  inputs: {

  },


  exits: {
    success: {
      responseType: 'redirect'
    }

  },


  fn: async function (inputs, exits) {

    //let articulo = await Articulo.update({id:1}, {descripcion:"Perfecto estado"})
    let articulo = await Articulo.update({id:6}, {precio: 70})
    return exits.success("/");

  }


};
