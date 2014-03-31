define(['u!tire-collection/tire-collection.hbs', 'u!tire','m!product-tire'], function(TmplTireCollection,UITire,MTire) {
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
