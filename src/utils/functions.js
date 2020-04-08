/**
 * @name utils.js
 * @author Mario Arturo Lopez Martinez
 * @overview Utility functions
 */

/**
 * @author Alnitak on StackOverflow
 * @see https://stackoverflow.com/questions/6491463/accessing-nested-javascript-objects-with-string-key
 * @param {object} o multi-level object you want to access
 * @param {string} s dot notation string used to access object
 * @description Most other libraries for accessing deeply nested properties
 * of an object don't work with bracket syntax. This one does work with bracket
 * syntax.
 * @example Object.byString(node, "sponsor.name") => node[sponsor][name]
 */
export const objectByString = (o, s) => {
  s = s.replace(/\[(\w+)\]/g, ".$1") // convert indexes to properties
  s = s.replace(/^\./, "") // strip a leading dot
  var a = s.split(".")
  for (var i = 0, n = a.length; i < n; ++i) {
    var k = a[i]
    if (k in o) {
      o = o[k]
    } else {
      return
    }
  }
  return o
}
