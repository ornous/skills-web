const { defineSupportCode } = require('cucumber')
const assert = require('assert')

defineSupportCode(function ({ Given, When, Then }) {
  let variableValue

  Given(/^a variable set to (\d+)$/, function (value, callback) {
    variableValue = value
    callback(null)
  })

  When(/^I increment the variable by (\d+)$/, function (value, callback) {
    variableValue += value
    callback(null)
  })

  When(/^the variable should contain (\d+)$/, function (value, callback) {
    assert(variableValue === value)
    callback(null)
  })
})
