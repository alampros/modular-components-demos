/** @license
 * RequireJS plugin for loading DT versioned assets
 * Author: Aaron Lampros
 * Version: 0.0.1 (2014/03/27)
 */
define(function(){
  return {
    load : function(name, req, onLoad, config) {
      req(['model/'+name+'/LATEST/'+name], function(value) {
        onLoad(value);
      });
    }
  };
});

