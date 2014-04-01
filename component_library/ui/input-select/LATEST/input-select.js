define(['jquery','u!input-select/input-select.hbs'], function($,TmplInputSelect) {
  /***
   * Renders a basic selectbox element.
   * 
   * @param {HTMLElement} elem An element to append the rendered component to.
   * @param {Object} Options An options map.
   * {
   *  disabled: {Boolean},
   *  options: {Object}
   * }
   * @requires jQuery
   * @constructor
   */
  var UIInputSelect = function(el,cfgOptions) {
		this.elem = el;
		this.$elem = $(el);

		this.config = {
			disabled: this.$elem.data('dt_ui_inputSelectDisabled') || false,
      tabIndex: this.$elem.data('dt_ui_inputSelectTabindex') || null,
      autofocus: this.$elem.data('dt_ui_inputSelectAutofocus') || null,
			options: []
		};

    this.update(cfgOptions);
  }
  /***
   * The handlebars template used to render the component
   * 
   * @param {Object} context Data used as context for the template function. Expects a `dt.model.Tire`.
   * @private
   */
  UIInputSelect.prototype._template = TmplInputSelect;
  /***
   * Draws the component.
   * 
   * @public
   */
  UIInputSelect.prototype.draw = function() {
    this.$elem.html(this._template(this.config));
  }
  /***
   * Updates options and redraws the component.
   * 
   * @public
   */
  UIInputSelect.prototype.update = function(cfgOptions) {
    $.extend(this.config, cfgOptions);
    this.draw();
  }
  /***
   * Draws the component in the DOM.
   * 
   * @public
   */
  UIInputSelect.prototype.draw = function() {
    this.$elem.html(this._template(this.config));
  }
  

	$.fn.dt_ui_InputSelect = function(cfgOptions) {
		return this.each(function() { //Maintain chainability
			var input = new UIInputSelect(this,cfgOptions);
			//Attach an instance of the plugin to the DOM element for reference in other plugins/classes.
			$(this).data("dt_ui_InputSelect", input); 
    });
	}
  
  return UIInputSelect;
});
