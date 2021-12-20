module.exports = {


  friendlyName: 'View inicio',


  description: 'Display "Inicio" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/inicio'
    }

  },


  fn: async function (inputs, exits) {

    const articulos = await Articulo.find().populate('usuario').populate('comentarios')
    
    return exits.success({articulos});

  }


};
