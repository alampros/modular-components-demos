(function(){
  dt = window.dt || {};
  dt.model = dt.model || {};
  /***
   * Represents a tire product.
   * 
   * @param {Object} props Properties of the tire. Product properties + 'size'
   * @constructor
   * @extends dt.model.Product
   */
  dt.model.Tire = function(props) {
    // superclass constructor
    dt.model.Product.call(this,props);
    console.log('Tire constructor called with options:',props);
    this.size = props.size;
  }
  //Inherit from dt.model.Product
  dt.model.Tire.prototype = Object.create( dt.model.Product.prototype );
})();
