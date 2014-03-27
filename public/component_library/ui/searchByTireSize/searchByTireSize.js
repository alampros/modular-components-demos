define([
  'jquery',
  'ui/searchByTireSize/searchByTireSize.hbs',
  'service/tireSizeCatalog/tireSizeCatalog',
  'model/tireSize/tireSize',
  'ui/input-select/input-select'
], function(
  $,
  TmplSearchByTireSize,
  STireSizeCatalog,
  MTireSize
) {
  /***
   * Renders a basic selectbox element.
   * 
   * @param {HTMLElement} elem An element to append the rendered component to.
   * @param {Object} Options An options map.
   * {
   *  disabled: {Boolean},
   *  data: {Object}
   * }
   * @requires jQuery
   * @constructor
   */
  var UISearchByTireSize = function(el,cfgOptions) {
		this.elem = el;
		this.$elem = $(el);

		this.config = {
      sizeComponents: [
        { options: STireSizeCatalog.getWidths(), attribute: 'width',    _inputSelect: null },
        { options: [],                           attribute: 'ratio',    _inputSelect: null },
        { options: [],                           attribute: 'diameter', _inputSelect: null },
        { options: [],                           attribute: 'perf',     _inputSelect: null }
      ],
		};
    this.update(cfgOptions);
    this._bind();
  }
  /***
   * The handlebars template used to render the component
   * 
   * @param {Object} context Data used as context for the template function.
   * @private
   */
  UISearchByTireSize.prototype._template = TmplSearchByTireSize;

  UISearchByTireSize.prototype._bind = function() {
    var self = this;
    self.$elem.on('change','select.dt-ui-input-select', $.proxy(self.onInputChange,self));
    self.$elem.on('sizeSelectionChange', $.proxy(self.onSelectionChange,self));
    self.$elem.on('sizeSelectionComplete', $.proxy(self.onSelectionComplete,self));
  }
  UISearchByTireSize.prototype.onInputChange = function(e) {
    var $targ = $(e.target);
    if($targ.hasClass('dt-ui-input-select')) {
      var sizeComponentAttribute = $(e.target).parents('.control-group').data('dt-ui-size-component');
      this.$elem.trigger('sizeSelectionChange', sizeComponentAttribute);
    }
  }
  UISearchByTireSize.prototype.onSelectionChange = function(e, sizeComponentAttribute) {
    //console.log('Selection change:',sizeComponentAttribute);
    var v = this.val();
    switch (sizeComponentAttribute) {
      case 'width':
        if(v.width && !v.ratio) {
          this.update('ratio', { disabled:false, options: STireSizeCatalog.search(v.width) });
          $('.control-group[data-dt-ui-size-component="ratio"] select',this.$elem).focus();
        }
        break;
      case 'ratio':
        if((v.width && v.ratio) && !v.diameter) {
          this.update('diameter', { disabled:false, options: STireSizeCatalog.search(v.width,v.ratio) });
          $('.control-group[data-dt-ui-size-component="diameter"] select',this.$elem).focus();
        }
        break;
      case 'diameter':
        if(v.width && v.ratio && v.diameter) {
          this.update('perf', { disabled:false, options: STireSizeCatalog.search(v.width,v.ratio,v.diameter) });
        }
        break;
      case 'perf':
        this.$elem.trigger('sizeSelectionComplete',v);
        break;
    }
  }
  UISearchByTireSize.prototype.onSelectionComplete = function(e, tireSize) {
    console.log('Selection complete:',tireSize);
  }

  UISearchByTireSize.prototype.val = function() {
    //throw new Error('Not implemented');
    var self = this;
    var ret = {};
    self.$elem.find('.control-group[data-dt-ui-size-component]').each(function(i,elm) {
      var selectedVal = $('select option:selected', elm).attr('value');
      if(selectedVal) {
        ret[$(elm).data('dt-ui-size-component')] = selectedVal;
      }
    });
    return ret;

  }

  UISearchByTireSize.prototype.update = function(cfgOptions) {
    var args = [].slice.call(arguments);
    if(!args[0]) {
      this.draw();
      return;
    }
    // UISearchByTireSize.update({sizeComponents:[]});
    if(args.length === 1 && typeof cfgOptions === 'object') {
      $.extend(this.config, cfgOptions);
      this.draw();
      return;
    }
    // UISearchByTireSize.update('width',[options]);
    if(args.length === 2 && typeof args[0] === 'string') {
      var componentToUpdate = $.grep(this.config.sizeComponents, function(sizeComponent) {
        return sizeComponent.attribute === args[0];
      })[0];
      if(componentToUpdate) {
        componentToUpdate._inputSelect.update(args[1]);
      } else {
        throw new Error('No size component found for attribute named "'+args[0]+'"');
      }
    }
  }
  /***
   * Draws the component.
   * 
   * @public
   */
  UISearchByTireSize.prototype.draw = function() {
    var self = this;
    self.$elem.html(self._template(self.config));
    this.config.sizeComponents.forEach(function(sizeComponent) {
      sizeComponent._inputSelect = self.$elem.find('.control-group[data-dt-ui-size-component='+sizeComponent.attribute+'] .control').dt_ui_InputSelect({
        disabled: sizeComponent.options.length === 0,
        options: sizeComponent.options
      }).data("dt_ui_InputSelect");
    });
    this.$elem.trigger('drawComplete');
  }

	$.fn.dt_ui_SearchByTireSize = function(cfgOptions) {
		return this.each(function() { //Maintain chainability
			//Attach an instance of the plugin to the DOM element for reference in other plugins/classes.
			$(this).data("dt_ui_SearchByTireSize", new UISearchByTireSize(this,cfgOptions)); 
    });
	}

  return UISearchByTireSize;
});
