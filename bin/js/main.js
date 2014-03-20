console.log('main.js loaded');
require.config({
  paths: {
    handlebars: '../lib/handlebars/handlebars.runtime'
  },
  shim: {
    handlebars: {
      exports: 'Handlebars',
      init: function() {
        this.Handlebars = Handlebars;
        return this.Handlebars;
      }
    }
  }
});
requirejs(['dt.ui.tire'], function(UITire) {
  console.log('main callback');
  var tire = new UITire(document.querySelector('#tires'),{
    price: {value: 174.2, unit: 'BPS'},
    description: 'Avid Ascend',
    size:'245/55R18'
  });
  console.log(tire);

  /*
  var tire = new Tire({
    price: {value: 174.2, unit: 'BPS'},
    description: 'Avid Ascend',
    size:'245/55R18'
  });
  console.log(tire);

  var tireGroup = new dt.ui.TireGroup(document.querySelector('#tires'), [
    new dt.model.Tire({
      price: {value: 174.2, unit: 'BPS'},
      description: 'Avid Ascend',
      size:'245/55R18'
    }),
    new dt.model.Tire({
      price: 180,
      description: 'Pilot Sport MX',
      size:'205/55R16'
    })
  ]);
  */
  
});
