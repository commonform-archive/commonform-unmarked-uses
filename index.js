module.exports = function unmarkedUses(form) {
  var definitions = analyze(form).definitions
  return annotator(
    Object.keys(definitions),
    function(form, path, string) {
      return {
        level: 'info',
        message: ( '"' + string + '" is an unmarked defined-term use.' ),
        path: path,
        source: 'commonform-unmarked-uses',
        url: null } })
      (form) }

var analyze = require('commonform-analyze')
var annotator = require('commonform-phrase-annotator')
