var allTestFiles = [];
var TEST_REGEXP = /tests\.js$/i;

var pathToModule = function(path) {
  return path.replace(/^\/base\//, '').replace(/\.js$/, '');
};

Object.keys(window.__karma__.files).forEach(function(file) {
  if (TEST_REGEXP.test(file)) {
    // Normalize paths to RequireJS module names.
    allTestFiles.push(pathToModule(file));
  }
});

require.config({
  // Karma serves files under /base, which is the basePath from your config file
  baseUrl: '/base',

  paths: {
    dt_path: 'vendor/requirejs/dt_path',
    m: 'vendor/requirejs/dt_shortloader_model',
    s: 'vendor/requirejs/dt_shortloader_service',
    u: 'vendor/requirejs/dt_shortloader_ui',
    json: 'vendor/requirejs/json',
    text: 'vendor/requirejs/text',
    jquery: 'vendor/jquery/jquery.min',
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
  },
  
  // dynamically load all test files
  deps: allTestFiles,

  // we have to kickoff jasmine, as it is asynchronous
  callback: window.__karma__.start
});
