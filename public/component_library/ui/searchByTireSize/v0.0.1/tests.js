define(['jquery','u!searchByTireSize'], function($,UISearchByTireSize) {
  var $el = $('body').append('<div class="ui-input-select-test"></div>');

  describe('InputSelect', function() {
    var inp = new UISearchByTireSize($el,{
      data: [1,2,3]
    });

    it('should draw html',function() {
      inp.draw();
      expect(inp.$elem.html().charAt(0)).toBe("<");
    });
    it('should add to the jQuery fn scope',function() {
      expect($.fn.dt_ui_SearchByTireSize).toBeDefined();
    });
  })
});


