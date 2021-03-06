var Cookie = require('cookie')
  , expect = require('chai').expect;

describe('Cookie:', function() {

  it('should set/get cookie quoted string value', function(done) {
    var cookie = new Cookie({raw: true});
    cookie.set('mock', '"mock-quote"');

    // disable raw to test code path
    cookie.options.raw = false;

    var data = cookie.get('mock');
    expect(data).to.eql('mock-quote');
    done();
  });

});
