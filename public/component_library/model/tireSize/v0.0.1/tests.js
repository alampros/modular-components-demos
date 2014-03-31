define(['m!tireSize'], function(TireSize) {
  describe('Tire size instantiated from the string "2055516"', function() {
    var size = new TireSize('2055516');

    it('should have the correct width property',function() {
      expect(size.width).toBe(205);
    })
    it('should have the correct ratio property',function() {
      expect(size.ratio).toBe(55);
    })
    it('should have the correct diameter property',function() {
      expect(size.diameter).toBe(16);
    })
    it('coerced to a string should match "205/55R16"',function() {
      expect(size.toString()).toBe('205/55R16');
    })
  })
  describe('Tire size instantiated from the string "245/65R14"', function() {
    var size = new TireSize('245/65R14');

    it('should have the correct width property',function() {
      expect(size.width).toBe(245);
    })
    it('should have the correct ratio property',function() {
      expect(size.ratio).toBe(65);
    })
    it('should have the correct diameter property',function() {
      expect(size.diameter).toBe(14);
    })
    it('coerced to a string should match "245/65R14"',function() {
      expect(size.toString()).toBe('245/65R14');
    })
  })
  describe('Tire size instantiated from an object', function() {
    var size = new TireSize({ width: 205, ratio: 55, diameter: 16 });
    it('should have the correct width property',function() {
      expect(size.width).toBe(205);
    })
    it('should have the correct ratio property',function() {
      expect(size.ratio).toBe(55);
    })
    it('should have the correct diameter property',function() {
      expect(size.diameter).toBe(16);
    })
    it('coerced to a string should match "205/55R16"',function() {
      expect(size.toString()).toBe('205/55R16');
    })
  })
  describe('Tire size instantiated from an an array', function() {
    var size = new TireSize([205,55,16]);
    it('should have the correct width property',function() {
      expect(size.width).toBe(205);
    })
    it('should have the correct ratio property',function() {
      expect(size.ratio).toBe(55);
    })
    it('should have the correct diameter property',function() {
      expect(size.diameter).toBe(16);
    })
    it('coerced to a string should match "205/55R16"',function() {
      expect(size.toString()).toBe('205/55R16');
    })
  })

});

