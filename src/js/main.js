console.log('main.js loaded');
require.config({
  paths: {
    handlebars: '../lib/handlebars/handlebars.runtime.min'
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
/* Render a single tire */
/*
requirejs(['dt.ui.tire'], function(UITire) {
  var tire = new UITire(document.querySelector('#tires'),{
    price: {value: 174.2, unit: 'BPS'},
    description: 'Avid Ascend',
    size:'245/55R18'
  });
  console.log(tire);
});
*/

/* Render a tire group */
requirejs(['dt.ui.tiregroup','dt.model.product.tire'], function(UITireGroup,Tire) {
  var tireGroup = new UITireGroup(document.querySelector('#tires'), [
    {
      price: {value: 174.2, unit: 'BPS'},
      description: 'Avid Ascend',
      size:'245/55R18'
    },
    {
      price: 180,
      description: 'Pilot Sport MX',
      size:'205/55R16'
    }
  ]);
  console.log(tireGroup);
});
