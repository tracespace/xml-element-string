// create an xml element string
'use strict'

var escapeHtml = require('escape-html')

module.exports = function createXmlString(tag, attributes, children) {
  attributes = attributes || {}
  children = children || []

  var start = '<' + escapeHtml(tag)

  var middle = Object.keys(attributes).reduce(function(result, key) {
    var value = attributes[key]
    var attr = (value != null)
      ? (' ' + escapeHtml(key) + '="' + escapeHtml(value) + '"')
      : ''

    return result + attr
  }, '')

  var end = (children.length)
    ? '>' + children.join('') + '</' + tag + '>'
    : '/>'

  return start + middle + end
}
