/** @license
 * RequireJS plugin for loading DT versioned assets
 * Author: Aaron Lampros
 * Version: 0.0.1 (2014/03/27)
 */
define(['dt_path'],function(Path){
  return {
    load : function(name, req, onLoad, config) {
      var p = Path.parse('service/'+name);
      req([p.toString()], function(value) {
        onLoad(value);
      });
    }
  };
});


