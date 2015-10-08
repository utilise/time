var expect = require('chai').expect
  , time   = require('./')

describe('time', function() {
  it('should convert object time to array', function(done) {
    var result = false
      , fn = function(){ result = true }

    time(50, fn)
    time(75, function(){ expect(result).to.be.ok })
    time(99, done)
  })
})