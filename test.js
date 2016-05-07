var expect = require('chai').expect
  , time   = require('./')

describe('time', function() {
  it('should call fn sometime in future', function(done) {
    var result = false
      , fn = function(){ result = true }

    time(50, fn)
    time(75, function(){ expect(result).to.be.ok })
    time(99, done)
  })

  it('should work with undefined time', function(done) {
    var result = false
      , fn = function(){ result = true }

    time(fn)
    time(5, function(){ expect(result).to.be.ok })
    time(10, done)
  })
})