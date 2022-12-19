const funcs = {
  area_square: side => side * side,
  area_circle: raio => Math.PI * raio * raio,
  area_triangulo: (base, height) => (base * height) / 2,
  area_retangulo: (base, height) => base * height
}

module.exports = funcs