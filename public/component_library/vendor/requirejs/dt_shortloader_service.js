/** @license
 * RequireJS plugin for loading DT versioned assets
 * Author: Aaron Lampros
 * Version: 0.0.1 (2014/03/27)
 */
define(function(){

  //API
  return {

    load : function(name, req, onLoad, config) {
      req(['service/'+name+'/LATEST/'+name], function(value) {
        onLoad(value);
      });

    }
  };
});

