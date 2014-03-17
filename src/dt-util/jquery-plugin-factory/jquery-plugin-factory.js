//from https://github.com/jquery-boilerplate/jquery-patterns/blob/master/patterns/jquery.prototypal-inheritance.plugin-boilerplate.js

var create = require('dt-util/object-create-shim');

var jQuery = module.exports = require('jquery');
(function($){
  $.plugin = function( name, object ) {
    $.fn[name] = function( options ) {
      return this.each(function() {
        if ( ! $.data( this, name ) ) {
          $.data( this, name, create(object).init(
          options, this ) );
        }
      });
    };
  };
})(jQuery);
