
function msg () {
  var nBase = document.getElementById('base').value
  var nPower = document.getElementById('power').value
  var nModulus = document.getElementById('modulus').value
  window.alert(modexp(nBase, nPower, nModulus))
}
function modexp (x, y, m) {
  if (y === 0) {
    return 1
  }
  var z = modexp(x, Math.floor(y / 2), m)
  if ((y % 2) === 0) {
    return (z * z) % m
  } else {
    return (x * z * z) % m
  }
}
