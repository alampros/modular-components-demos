console.log('main.js loaded');
require.config({
  baseUrl: "component_library",
  paths: {
    handlebars: 'vendor/handlebars/handlebars.runtime.min'
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


/* Render a tire group */
requirejs(['ui/tire-collection/tire-collection','model/product-tire/product-tire'], function(UITireCollection,MTire) {
  var searchResults = new UITireCollection(document.querySelector('#tires'), [
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
  console.log(searchResults);
});
