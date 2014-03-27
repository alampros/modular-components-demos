define(['service/tireSizeCatalog/tireSizeCatalog', 'model/tireSize/tireSize'], function(TireSizeCatalog, MTireSize) {
  describe('Tire size catalog', function() {
    it('should have a getWidths method', function() {
      expect(TireSizeCatalog.getWidths).toBeDefined();
    });
    it('getWidths should return an array', function() {
      expect((TireSizeCatalog.getWidths() instanceof Array)).toBe(true);
    });
    it('getWidths should return an array containing "205"', function() {
      expect(TireSizeCatalog.getWidths()[0]).toMatch(/\d{3}/);
    });
    it('should have a getPerformanceDescriptions method', function() {
      expect(TireSizeCatalog.getPerformanceDescriptions).toBeDefined();
    });
    it('getPerformanceDescriptions method should return an array', function() {
      expect((TireSizeCatalog.getPerformanceDescriptions('205','55','16') instanceof Array)).toBe(true);
    });
    it('should return an array of ratios by width', function() {
      var ratios = TireSizeCatalog.getRatios('205');
      expect((ratios instanceof Array)).toBe(true);
      expect(ratios.length).toBeGreaterThan(0);
    });
    it('should return an array of diameters by width and ratio', function() {
      var diameters = TireSizeCatalog.getDiameters('205','55');
      expect((diameters instanceof Array)).toBe(true);
      expect(diameters.length).toBeGreaterThan(0);
    });
  });
  describe('TireSizeCatalog.search', function() {
    it('should return an array if passed no parameters', function() {
      var widths = TireSizeCatalog.search();
      expect((widths instanceof Array)).toBe(true);
      expect(widths).toContain('205');
    })
    it('should return an array of ratios if passed only one param', function() {
      var ratios = TireSizeCatalog.search('205');
      expect((ratios instanceof Array)).toBe(true);
      expect(ratios.length).toBeGreaterThan(0);
      expect(ratios).toContain('55');
    });
    it('should return an array of diameters if passed width and ratio', function() {
      var ratios = TireSizeCatalog.search('205','55');
      expect((ratios instanceof Array)).toBe(true);
      expect(ratios.length).toBeGreaterThan(0);
      expect(ratios).toContain('16');
    });
    it('should return an array of performance descriptions if passed width and ratio and diameter', function() {
      var perfs = TireSizeCatalog.search('205','55','16');
      console.log(perfs);
      expect((perfs instanceof Array)).toBe(true);
      expect(perfs.length).toBeGreaterThan(0);
      expect(perfs[0]).toMatch(/(\d{2}|-)[A-Z]/);
    })
  });
});

