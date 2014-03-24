/*!

 handlebars v1.3.0

Copyright (C) 2011 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

@license
*/
this.Handlebars=function(){var a=function(){function a(a){this.string=a}var b;return a.prototype.toString=function(){return""+this.string},b=a}(),b=function(a){function b(a){return h[a]||"&amp;"}function c(a,b){for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&(a[c]=b[c])}function d(a){return a instanceof g?a.toString():a||0===a?(a=""+a,j.test(a)?a.replace(i,b):a):""}function e(a){return a||0===a?m(a)&&0===a.length?!0:!1:!0}var f={},g=a,h={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},i=/[&<>"'`]/g,j=/[&<>"'`]/;f.extend=c;var k=Object.prototype.toString;f.toString=k;var l=function(a){return"function"==typeof a};l(/x/)&&(l=function(a){return"function"==typeof a&&"[object Function]"===k.call(a)});var l;f.isFunction=l;var m=Array.isArray||function(a){return a&&"object"==typeof a?"[object Array]"===k.call(a):!1};return f.isArray=m,f.escapeExpression=d,f.isEmpty=e,f}(a),c=function(){function a(a,b){var d;b&&b.firstLine&&(d=b.firstLine,a+=" - "+d+":"+b.firstColumn);for(var e=Error.prototype.constructor.call(this,a),f=0;f<c.length;f++)this[c[f]]=e[c[f]];d&&(this.lineNumber=d,this.column=b.firstColumn)}var b,c=["description","fileName","lineNumber","message","name","number","stack"];return a.prototype=new Error,b=a}(),d=function(a,b){function c(a,b){this.helpers=a||{},this.partials=b||{},d(this)}function d(a){a.registerHelper("helperMissing",function(a){if(2===arguments.length)return void 0;throw new h("Missing helper: '"+a+"'")}),a.registerHelper("blockHelperMissing",function(b,c){var d=c.inverse||function(){},e=c.fn;return m(b)&&(b=b.call(this)),b===!0?e(this):b===!1||null==b?d(this):l(b)?b.length>0?a.helpers.each(b,c):d(this):e(b)}),a.registerHelper("each",function(a,b){var c,d=b.fn,e=b.inverse,f=0,g="";if(m(a)&&(a=a.call(this)),b.data&&(c=q(b.data)),a&&"object"==typeof a)if(l(a))for(var h=a.length;h>f;f++)c&&(c.index=f,c.first=0===f,c.last=f===a.length-1),g+=d(a[f],{data:c});else for(var i in a)a.hasOwnProperty(i)&&(c&&(c.key=i,c.index=f,c.first=0===f),g+=d(a[i],{data:c}),f++);return 0===f&&(g=e(this)),g}),a.registerHelper("if",function(a,b){return m(a)&&(a=a.call(this)),!b.hash.includeZero&&!a||g.isEmpty(a)?b.inverse(this):b.fn(this)}),a.registerHelper("unless",function(b,c){return a.helpers["if"].call(this,b,{fn:c.inverse,inverse:c.fn,hash:c.hash})}),a.registerHelper("with",function(a,b){return m(a)&&(a=a.call(this)),g.isEmpty(a)?void 0:b.fn(a)}),a.registerHelper("log",function(b,c){var d=c.data&&null!=c.data.level?parseInt(c.data.level,10):1;a.log(d,b)})}function e(a,b){p.log(a,b)}var f={},g=a,h=b,i="1.3.0";f.VERSION=i;var j=4;f.COMPILER_REVISION=j;var k={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:">= 1.0.0"};f.REVISION_CHANGES=k;var l=g.isArray,m=g.isFunction,n=g.toString,o="[object Object]";f.HandlebarsEnvironment=c,c.prototype={constructor:c,logger:p,log:e,registerHelper:function(a,b,c){if(n.call(a)===o){if(c||b)throw new h("Arg not supported with multiple helpers");g.extend(this.helpers,a)}else c&&(b.not=c),this.helpers[a]=b},registerPartial:function(a,b){n.call(a)===o?g.extend(this.partials,a):this.partials[a]=b}};var p={methodMap:{0:"debug",1:"info",2:"warn",3:"error"},DEBUG:0,INFO:1,WARN:2,ERROR:3,level:3,log:function(a,b){if(p.level<=a){var c=p.methodMap[a];"undefined"!=typeof console&&console[c]&&console[c].call(console,b)}}};f.logger=p,f.log=e;var q=function(a){var b={};return g.extend(b,a),b};return f.createFrame=q,f}(b,c),e=function(a,b,c){function d(a){var b=a&&a[0]||1,c=m;if(b!==c){if(c>b){var d=n[c],e=n[b];throw new l("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+d+") or downgrade your runtime to an older version ("+e+").")}throw new l("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+a[1]+").")}}function e(a,b){if(!b)throw new l("No environment passed to template");var c=function(a,c,d,e,f,g){var h=b.VM.invokePartial.apply(this,arguments);if(null!=h)return h;if(b.compile){var i={helpers:e,partials:f,data:g};return f[c]=b.compile(a,{data:void 0!==g},b),f[c](d,i)}throw new l("The partial "+c+" could not be compiled when running in runtime-only mode")},d={escapeExpression:k.escapeExpression,invokePartial:c,programs:[],program:function(a,b,c){var d=this.programs[a];return c?d=g(a,b,c):d||(d=this.programs[a]=g(a,b)),d},merge:function(a,b){var c=a||b;return a&&b&&a!==b&&(c={},k.extend(c,b),k.extend(c,a)),c},programWithDepth:b.VM.programWithDepth,noop:b.VM.noop,compilerInfo:null};return function(c,e){e=e||{};var f,g,h=e.partial?e:b;e.partial||(f=e.helpers,g=e.partials);var i=a.call(d,h,c,f,g,e.data);return e.partial||b.VM.checkRevision(d.compilerInfo),i}}function f(a,b,c){var d=Array.prototype.slice.call(arguments,3),e=function(a,e){return e=e||{},b.apply(this,[a,e.data||c].concat(d))};return e.program=a,e.depth=d.length,e}function g(a,b,c){var d=function(a,d){return d=d||{},b(a,d.data||c)};return d.program=a,d.depth=0,d}function h(a,b,c,d,e,f){var g={partial:!0,helpers:d,partials:e,data:f};if(void 0===a)throw new l("The partial "+b+" could not be found");return a instanceof Function?a(c,g):void 0}function i(){return""}var j={},k=a,l=b,m=c.COMPILER_REVISION,n=c.REVISION_CHANGES;return j.checkRevision=d,j.template=e,j.programWithDepth=f,j.program=g,j.invokePartial=h,j.noop=i,j}(b,c,d),f=function(a,b,c,d,e){var f,g=a,h=b,i=c,j=d,k=e,l=function(){var a=new g.HandlebarsEnvironment;return j.extend(a,g),a.SafeString=h,a.Exception=i,a.Utils=j,a.VM=k,a.template=function(b){return k.template(b,a)},a},m=l();return m.create=l,f=m}(d,a,c,b,e);return f}();
define("handlebars", (function (global) {
    return function () {
        var ret, fn;
       fn = function () {
        this.Handlebars = Handlebars;
        return this.Handlebars;
      };
        ret = fn.apply(global, arguments);
        return ret || global.Handlebars;
    };
}(this)));

define('ui/tire-collection.hbs',['handlebars'], function(Handlebars) {

return Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"dtui-tiregroup\"></div>\n";
  })

});
define('ui/tire.hbs',['handlebars'], function(Handlebars) {

return Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"dtui-product dtui-product-tire\">\n  <div class=\"dtui-product-description\">";
  if (helper = helpers.description) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.description); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n  <div class=\"dtui-tire-size\">";
  if (helper = helpers.size) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.size); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n  <div class=\"dtui-price\">";
  if (helper = helpers.price) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.price); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</div>\n</div>\n";
  return buffer;
  })

});
define('model/constants',[],function() {
  return {
    CURRENCY_SYMBOL_MAP: { 'USD':'$', 'BPS':'£', 'EUR':'€' }
  }
});

define('model/price',['model/constants'], function(consts) {
  /***
   * Represents a Price.
   * 
   * @param {Object} props Properties of the tire. Product properties + 'size'
   * @constructor
   */
  var Price = function(props) {
    props = props || {};
    props = typeof props === 'number' ? {value: props} : props;
    this.value = props.value || 0;
    this.unit = props.unit || 'USD';
  }
  Price.prototype.toString = function() {
    return consts.CURRENCY_SYMBOL_MAP[this.unit] + this.value.toFixed(2);
  }
  return Price;
});

define('model/product',['model/price'], function(MPrice) {
  /***
   * Represents a product.
   * 
   * @param {Object} props Properties of the tire. Product properties + 'size'
   * @constructor
   */
  var Product = function(props) {
    console.log('Product constructor called with options:',props);
    this.price = new MPrice(props.price);
    this.description = props.description || 'Untitled product';
  }
  Product.prototype.toString = function() {
    return this.description + ': ' + this.price;
  }
  return Product;
});

define('model/product-tire',['model/product'], function(Product) {
  /***
   * Represents a tire product.
   * 
   * @param {Object} props Properties of the tire. Product properties + 'size'
   * @constructor
   * @extends dt.model.Product
   */
  var Tire = function(props) {
    // superclass constructor
    Product.call(this,props);
    console.log('Tire constructor called with options:',props);
    this.size = props.size;
  }
  //Inherit from dt.model.Product
  Tire.prototype = Object.create( Product.prototype );
  return Tire;
});

define('ui/tire',['ui/tire.hbs', 'model/product-tire'], function(TmplTire,MTire) {
  /***
   * Renders a single `model/Tire`.
   * 
   * @param {HTMLElement} elem An element to append the rendered component to.
   * @param {model/Tire} tire A `model/Tire` object.
   * @constructor
   */
  var UITire = function(elem,tire) {
    this.data = (tire instanceof MTire) ? tire : new MTire(tire);
    this.el = elem;
    this.render();
  }
  /***
   * The handlebars template used to render the component
   * 
   * @param {Object} context Data used as context for the template function. Expects a `dt.model.Tire`.
   * @private
   */
  UITire.prototype.template = TmplTire;
  /***
   * Draws the component.
   * 
   * @public
   */
  UITire.prototype.render = function() {
    console.log('Rendering tire "%s".',this.data.toString());
    this.el.insertAdjacentHTML('beforeend', this.template(this.data));
  }

  return UITire;
});

define('ui/tire-collection',['ui/tire-collection.hbs', 'ui/tire','model/product-tire'], function(TmplTireCollection,UITire,MTire) {
  /***
   * Renders a group of ui/Tire components in a container.
   * 
   * @param {HTMLElement} elem An element to append the rendered component to.
   * @param {[model/Tire]} tires An array of `model/Tire` objects.
   * @constructor
   */
  var UITireCollection = function(elem,tires) {
    this.data = tires.map(function(tire) { return (tire instanceof MTire) ? tire : new MTire(tire) });
    this.el = elem;
    this.render();
  }
  /***
   * The handlebars template used to render the component
   * 
   * @param {Object} context Data used as context for the template function.
   * @private
   */
  UITireCollection.prototype.template = TmplTireCollection;
  /***
   * Draws the component.
   * 
   * @public
   */
  UITireCollection.prototype.render = function() {
    this.el.UITireCollection = this;
    this.el.insertAdjacentHTML('beforeend', this.template());
    var container = this.el.querySelector('.dtui-tiregroup');
    this.data.forEach(function(tire) {
      new UITire(container,tire);
    });
  }


  return UITireCollection;
});

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
requirejs(['ui/tire-collection','model/product-tire'], function(UITireCollection,MTire) {
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

define("../js/main", function(){});

