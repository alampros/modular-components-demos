define('tests',['model/product-tire/LATEST/product-tire'], function(Tire) {
  describe('Loading a model with the shortcut plugin', function() {
    it('should take a single module name ("m!product-tire")', function(done) {
      require(['m!product-tire'], function(Result) {
        expect(typeof Result).toBe('function');
        done(true);
      })
    });
    it('should take a single module name with a version ("m!product@v0.0.1")', function(done) {
      require(['m!product@v0.0.1'], function(Result) {
        expect(typeof Result).toBe('function');
        done();
      })
    });
  });
  describe('Loading a service with the shortcut plugin', function() {
    it('should take a single module name with a version ("s!tireSizeCatalog@v0.0.1")', function(done) {
      require(['s!tireSizeCatalog@v0.0.1'], function(Result) {
        expect(typeof Result).toBe('object');
        done();
      })
    });
    it('should take a module name with a file name ("s!tireSizeCatalog/tests")', function(done) {
      require(['s!tireSizeCatalog/tireSizeCatalog'], function(Result) {
        expect(typeof Result).toBe('object');
        done();
      })
    });
    it('should take a module name with a file name and a version("s!tireSizeCatalog/file@v0.0.1")', function(done) {
      require(['s!tireSizeCatalog/tireSizeCatalog@v0.0.1'], function(Result) {
        expect(typeof Result).toBe('object');
        done();
      })
    });
  });
  describe('Loading a component with the shortcut plugin', function() {
    it('should take a single module name ("u!tire")', function(done) {
      require(['u!tire'], function(Result) {
        expect(typeof Result).toBe('function');
        done();
      })
    });
    it('should take a module name with a file name ("u!tire/tire.hbs")', function(done) {
      require(['u!tire/tire.hbs'], function(Result) {
        expect(typeof Result).toBe('function');
        done();
      })
    });
  });
});
