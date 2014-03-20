define(['dt.model.product'], function(Product) {
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
