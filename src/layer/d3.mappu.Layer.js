/**
 Generic layer object, to be extended.
**/


"use strict";
d3.mappu.Layer = function(name, config) {
    return d3_mappu_Layer(name, config);
};

d3_mappu_Layer = function(name, config){
    var layer = {};
    this.config = config;
    layer.name = name;
    layer.id = null;//TODO: automatic ID gen
    layer.name = name;
    layer.opacity = 1;
    layer.visible = true;  
  
          
    /* DEBUG */
    layer.drawboard = d3.select('map');
    /* END DEBUG */
    
    /* exposed: */
    layer.refresh =  function(){
    };
    layer.moveUp = function(){
    };
    layer.moveDown = function(){
    };

    /* private: */
    layer._onAdd =  function(map){ //Adds the layer to the given map object
    };
    layer._onRemove = function(){ //Removes the layer from the map object
    };
    layer._draw = function(){
    };
    
    return layer;
};
