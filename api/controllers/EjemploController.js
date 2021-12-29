module.exports = {
  accionUno: function (req, res) {
    return res.send('Uno')
  },
  accionDos: function (req, res) {
    return res.view("pages/accion_dos")
  }
}