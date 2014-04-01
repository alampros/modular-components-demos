define(['u!tire/tire.hbs', 'm!product-tire'], function(TmplTire,MTire) {
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
