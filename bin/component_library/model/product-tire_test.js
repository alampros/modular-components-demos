define(['model/product-tire','model/price'], function(Tire,Price) {
  var mocks = [
    {
      price: {value: 174.2, unit: 'BPS'},
      description: 'Avid Ascend',
      size:'245/55R18'
    },
    {
      price: {value: 180, unit: 'BPS'},
      description: 'Avid Ascend',
      size:'245/55R18'
    }
  ];

  describe('Tire instance', function() {
    var tire = new Tire({
      price: {value: 174.2, unit: 'USD'},
      description: 'Avid Ascend',
      size:'245/55R18'
    });

    it('should match the description passed to the constructor',function() {
      expect(tire.description).toBe('Avid Ascend');
    })
    it('coersed to a string should be formatted "[desc] [size] ([price])"', function() {
      expect(tire.toString()).toEqual('Avid Ascend 245/55R18 ($174.20)');
    })
    it('should have a model.Price instance as .price property', function() {
      expect((tire.price instanceof Price)).toBe(true);
    })
  })
});
