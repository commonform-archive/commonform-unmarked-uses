module.exports = function unmarkedUses(form) {
  // Analyze the form, then pull out metadata about the terms defined within.
  var definitions = analyze(form).definitions
  // Create a phrase annotator matching strings equal to the terms defined.
  return annotator(
    Object.keys(definitions),
    function(form, path, string) {
      return {
        level: 'info',
        message: ( '"' + string + '" is an unmarked defined-term use.' ),
        path: path,
        source: 'commonform-unmarked-uses',
        url: null } })
      // Apply the annotator to the form.
      (form) }

var analyze = require('commonform-analyze')
var annotator = require('commonform-phrase-annotator')
