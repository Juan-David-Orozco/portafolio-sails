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

    // sails.log.info("INFO")

    const articulos = await Articulo.find().populate('usuario').populate('comentarios')
    return exits.success({articulos: articulos});

    // sails.log.warn("WARN")
    // sails.log.error("ERROR")
    // sails.log.debug(articulos)

  }


};
