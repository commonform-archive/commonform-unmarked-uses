var analyze = require('commonform-analyze')
var annotator = require('commonform-regexp-annotator')

module.exports = function unmarkedUses (form) {
  // Analyze the form, then pull out metadata about the terms defined within.
  var definitions = analyze(form).definitions
  // Create a phrase annotator matching strings equal to the terms defined.
  return annotator(
    Object.keys(definitions).map(function (term) {
      return new RegExp('(\\b' + term + '\\b)', 'g')
    }),
    function (form, path, re, match) {
      var string = match[1]
      return {
        level: 'info',
        message: ( '"' + string + '" is an unmarked defined-term use.' ),
        path: path,
        source: 'commonform-unmarked-uses',
        url: null
      }
    })
    // Apply the annotator to the form.
    (form)
}
