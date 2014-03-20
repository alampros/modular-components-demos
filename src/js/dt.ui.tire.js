define(['tmpl/dt.ui.tire', 'dt.model.product.tire'], function(TireTemplate,TireModel) {
  /***
   * Renders a single `dt.model.Tire`.
   * 
   * @param {HTMLElement} elem An element to append the rendered component to.
   * @param {dt.model.Tire} tire A `dt.model.Tire` object.
   * @constructor
   */
  var Tire = function(elem,tire) {
    this.data = (tire instanceof Tire) ? tire : new TireModel(tire);
    this.el = elem;
    this.render();
  }
  /***
   * The handlebars template used to render the component
   * 
   * @param {Object} context Data used as context for the template function. Expects a `dt.model.Tire`.
   * @private
   */
  Tire.prototype.template = TireTemplate;
  /***
   * Draws the component.
   * 
   * @public
   */
  Tire.prototype.render = function() {
    console.log('Rendering tire "%s".',this.data.toString());
    this.el.insertAdjacentHTML('beforeend', this.template(this.data));
  }

  return Tire;
});
