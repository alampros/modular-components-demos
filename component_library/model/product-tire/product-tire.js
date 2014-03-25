define(['model/product/product'], function(Product) {
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
    this.size = props.size;
  }
  //Inherit from dt.model.Product
  Tire.prototype = Object.create( Product.prototype );

  Tire.prototype.toString = function() {
    return this.description + ' ' + this.size + ' (' + this.price + ')';
  }
  return Tire;
});
