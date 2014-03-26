console.log('main.js loaded');
require.config({
  baseUrl: "component_library",
  paths: {
    json: 'vendor/requirejs/json',
    text: 'vendor/requirejs/text',
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


requirejs(['service/tireSizeCatalog/tireSizeCatalog'], function(TireSizeCatalog) {
  console.log('Loaded tire size catalog', new TireSizeCatalog());
});

