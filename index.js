var notation = require('music.notation')
var op = require('music.operator')

/**
 * Transposes a pitch by an interval
 *
 * @param {String|Array} a - a pitch or interval in string or array notation
 * @param {String|Array} b - a pitch or interval in string or array notation
 * @return {String|Array} the transposed pitch
 *
 * @example
 * transpose('3m', 'C4') // => 'Eb4'
 * transpose('C4', '3m') // => 'Eb4'
 * tranpose([1, 0, 2], [3, -1, 0]) // => [3, 0, 2]
 */
function transpose (interval, pitch) {
  if (arguments.length === 1) return function (p) { return transpose(interval, p) }

  var i = notation.arr(interval)
  var p = notation.arr(pitch)
  if (!i || !p) return null
  if (i.length === 3) return notation.str(op.add(i, p))
  else if (p.length === 3) return notation.str(op.add(p, i))
  else return null
}

module.exports = transpose
