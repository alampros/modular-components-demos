console.log('main.js loaded');
require.config({
  baseUrl: "component_library",
  paths: {
    json: 'vendor/requirejs/json',
    m: 'vendor/requirejs/dt_shortloader_model',
    s: 'vendor/requirejs/dt_shortloader_service',
    text: 'vendor/requirejs/text',
    handlebars: 'vendor/handlebars/handlebars.runtime.min',
    jquery: 'vendor/jquery/jquery.min'
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
/*
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
*/


/*
// Resource shorthand using the dt_shortloader_model plugin
requirejs(['m!product'], function(Tire) {
  console.log('TIRE LOADED!',Tire);
})
*/

requirejs(['jquery','ui/searchByTireSize/searchByTireSize', 'service/tireSizeCatalog/tireSizeCatalog'], function($,UISearchByTireSize, STireSizeCatalog) {
  var testElem = $('<div class="test-elem" />').appendTo('body');
  var search = testElem.dt_ui_SearchByTireSize().data('dt_ui_SearchByTireSize');
  //console.log(search.config);

  //var inp = new UISearchByTireSize(testElem.get(0));
});

