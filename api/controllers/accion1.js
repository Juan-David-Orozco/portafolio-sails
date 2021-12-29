module.exports = async function (req, res) {
  return res.view("pages/accion1", {nombre: "juan"})
}