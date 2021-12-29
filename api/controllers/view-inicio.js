module.exports = {


  friendlyName: 'View inicio',


  description: 'Display "Inicio" page.',

  inputs: {

    precio: {
      type: 'number',
      required: false
    }

  },

  exits: {

    success: {
      viewTemplatePath: 'pages/inicio'
    }

  },


  fn: async function (inputs, exits) {

    let articulos
    if (inputs.precio) {
      articulos = await Articulo.find({precio: {">": inputs.precio}}).populate('usuario').populate('comentarios')
    }
    else {
      articulos = await Articulo.find().populate('usuario').populate('comentarios')
    }
    
    return exits.success({articulos: articulos});

  }


};
