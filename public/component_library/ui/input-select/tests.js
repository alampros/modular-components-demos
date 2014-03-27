define(['jquery','ui/input-select/input-select'], function($,UIInputSelect) {
  describe('InputSelect created from class object', function() {
    var $el,inp;
    beforeEach(function() {
      $el = $('body').append('<div class="ui-input-select-test"></div>');
      inp = new UIInputSelect($el,{
        data: [1,2,3]
      });
    })

    it('have a draw function',function() {
      inp.draw();
      expect(inp.$elem.html().charAt(0)).toBe("<");
    })
    it('should add to the jQuery fn scope',function() {
      expect($.fn.dt_ui_InputSelect).toBeDefined();
    })
    it('should be disabled with data-dt_ui_input-select-disabled="true"', function() {
      expect($.fn.dt_ui_InputSelect).toBeDefined();
    })
  })
  describe('InputSelect created from jquery plugin with data-options', function() {
    var $el,inp;
    beforeEach(function() {
      $el = $('<div class="ui-input-select-test" data-dt_ui_input-select-disabled="true" data-dt_ui_input-select-tabIndex="3" />').appendTo('body');
      $el.dt_ui_InputSelect();
      inp = $el.data('dt_ui_InputSelect');
    })

    it('should be disabled with data-dt_ui_input-select-disabled="true"', function() {
      expect($el.find('select').prop('disabled')).toBeTruthy();
    })
    it('should be have a tabIndex of 3', function() {
      expect($el.find('select').prop('tabIndex')).toBe(3);
    })
  })
});
