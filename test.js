// test suite for the xml element string function
'use strict'

var expect = require('chai').expect

var element = require('./')

describe('xml element string function', function() {
  it('should be able to create a node', function() {
    var result = element('node')
    var expected = '<node/>'

    expect(result).to.equal(expected)
  })

  it('should be able to create a node with attributes', function() {
    var result = element('foo', {bar: 'baz', quux: 'hello'})
    var expected = '<foo bar="baz" quux="hello"/>'

    expect(result).to.equal(expected)
  })

  it('should not write null attributes', function() {
    var result = element('foo', {bar: undefined, baz: 'quux', nope: null})
    var expected = '<foo baz="quux"/>'

    expect(result).to.equal(expected)
  })

  it('should escape html characters in the tag', function() {
    var result = element('foo/>danger')
    var expected = '<foo/&gt;danger/>'

    expect(result).to.equal(expected)
  })

  it('should escape html characters in the attribute names', function() {
    var result = element('foo', {'/>danger': 'bar'})
    var expected = '<foo /&gt;danger="bar"/>'

    expect(result).to.equal(expected)
  })

  it('should escape html characters in the attribute values', function() {
    var result = element('foo', {bar: '"/>danger'})
    var expected = '<foo bar="&quot;/&gt;danger"/>'

    expect(result).to.equal(expected)
  })

  it('should handle an array of children', function() {
    var result = element('node', {}, ['<child/>', '<child/>'])
    var expected = '<node><child/><child/></node>'

    expect(result).to.equal(expected)
  })
})
