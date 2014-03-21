define(['tmpl/dt.ui.tiregroup', 'dt.ui.tire','dt.model.product.tire'], function(TireGroupTemplate,UITire,TireModel) {
  /***
   * Renders a group of ui.Tire components in a container.
   * 
   * @param {HTMLElement} elem An element to append the rendered component to.
   * @param {[dt.model.Tire]} tires An array of `dt.model.Tire` objects.
   * @constructor
   */
  var TireGroup = function(elem,tires) {
    this.data = tires.map(function(tire) { return (tire instanceof TireModel) ? tire : new TireModel(tire) });
    this.el = elem;
    this.render();
  }
  /***
   * The handlebars template used to render the component
   * 
   * @param {Object} context Data used as context for the template function.
   * @private
   */
  TireGroup.prototype.template = TireGroupTemplate;
  /***
   * Draws the component.
   * 
   * @public
   */
  TireGroup.prototype.render = function() {
    this.el.TireGroup = this;
    this.el.insertAdjacentHTML('beforeend', this.template());
    var container = this.el.querySelector('.dtui-tiregroup');
    this.data.forEach(function(tire) {
      new UITire(container,tire);
    });
  }


  return TireGroup;
});
