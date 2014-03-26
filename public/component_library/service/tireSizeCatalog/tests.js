define(['service/tireSizeCatalog/tireSizeCatalog', 'model/tireSize/tireSize'], function(TireSizeCatalog, MTireSize) {
  var catalog = new TireSizeCatalog();
  describe('Tire size catalog', function() {
    it('should have "205" in its widths array property', function() {
      expect(catalog.widths).toContain('205');
    });
    it('should return an array of ratios by width', function() {
      var ratios = catalog.getRatios('205');
      expect((ratios instanceof Array)).toBe(true);
      expect(ratios.length).toBeGreaterThan(0);
    });
    it('should return an array of diameters by width and ratio', function() {
      var diameters = catalog.getDiameters('205','55');
      expect((diameters instanceof Array)).toBe(true);
      expect(diameters.length).toBeGreaterThan(0);
    });
  });
  describe('TireSizeCatalog.search', function() {
    it('should return an array of ratios if passed only one param', function() {
      var ratios = catalog.search('205');
      expect((ratios instanceof Array)).toBe(true);
      expect(ratios.length).toBeGreaterThan(0);
      expect(ratios).toContain('55');
    });
    it('should return an array of diameters if passed width and ratio', function() {
      var ratios = catalog.search('205','55');
      expect((ratios instanceof Array)).toBe(true);
      expect(ratios.length).toBeGreaterThan(0);
      expect(ratios).toContain('16');
    });
  });
});

