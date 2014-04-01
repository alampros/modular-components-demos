console.log('main.js loaded');

var __deps = [];
if(!Object.create) {
  __deps.push('util/polyfill_object');
}
if(!document.querySelectorAll || !document.querySelector) {
  __deps.push('util/polyfill_querySelector');
}

require.config({
  baseUrl: "component_library",
  deps: __deps,
  paths: {
    dt_path: 'vendor/requirejs/dt_path',
    m: 'vendor/requirejs/dt_shortloader_model',
    s: 'vendor/requirejs/dt_shortloader_service',
    u: 'vendor/requirejs/dt_shortloader_ui',
    json: 'vendor/requirejs/json',
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
requirejs(['u!tire-collection','m!product-tire'], function(UITireCollection,MTire) {
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
/*
*/


/*
// Resource shorthand using the dt_shortloader_model plugin
requirejs(['m!product-tire'], function(Tire) {
  console.log('TIRE LOADED!',Tire);
})
requirejs(['m!product@v0.0.1'], function(Tire) {
  console.log('TIRE LOADED!',Tire);
})
requirejs(['m!product@v0.0.2'], function(Tire) {
  console.log('TIRE LOADED!',Tire);
})
requirejs(['m!product/file.js@v0.0.2'], function(Tire) {
  console.log('TIRE LOADED!',Tire);
})
requirejs(['m!product/file'], function(Tire) {
  console.log('TIRE LOADED!',Tire);
})
requirejs(['ui!input-select'], function(sbts) {
  console.log('SBTS LOADED',sbts);
});
*/

