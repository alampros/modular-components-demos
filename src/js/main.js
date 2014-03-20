console.log('main.js loaded');
require.config({
  paths: {
    handlebars: '../lib/handlebars/'
  }
});
requirejs(['handlebars/handlebars.min', 'dt.model.product.tire'], function(Handlebars, Tire) {
  console.log('main callback');

  var tire = new Tire({
    price: {value: 174.2, unit: 'BPS'},
    description: 'Avid Ascend',
    size:'245/55R18'
  });
  console.log(tire);
  /*
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
