define(['model/price'], function(MPrice) {
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
