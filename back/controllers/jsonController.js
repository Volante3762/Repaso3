async function getJson(req, res) {
  res.json({ id: 1, nombre: "Franco", apellido: "Volante" });
}

module.exports = {
  getJson,
};
