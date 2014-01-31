var Pois = Backbone.Collection.extend({

  initialize: function(attrs, options){
    _.bindAll(this, 'parse');

  },

  // assumes geoJSON
  parse: function(response){
    this.reset(response.features);
  }

});

module.exports = Pois;
