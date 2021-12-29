module.exports = {


  friendlyName: '',


  description: '',


  inputs: {
    nombre: {
      type: 'string',
      example: 'juan',
      description: 'The name of the person to greet',
      required: true
    },
    apellido: {
      type: 'string',
      example: 'snow',
      description: 'The name of the person to greet',
      required: true
    },
  },

  fn: async function (inputs, exits) {

    let result = `${inputs.nombre} ${inputs.apellido}`
    return exits.success(result);

  }


};
