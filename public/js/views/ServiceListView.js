//http://stackoverflow.com/questions/19476317/backbone-collection-fetches-data-but-doesnt-set-models

// http://stackoverflow.com/questions/17604374/backbone-js-fetch-a-collection-of-models-and-render-them
var Service = require("js/lib/model/Service")
var ServiceList = require("js/lib/model/ServiceList")

var ServiceListView = Backbone.View.extend({
  el: $("body"),
  
  initialize: function(){
    _.bindAll(this, "render")
    
    this.collection = new ServiceList()
    this.collection.bind("reset", this.render)
    this.collection.fetch()
    
    this.render()
  }
  
  render: function(){
    console.log('ServiceListView.render()')
    var self = this
    this.$el.append('<ul></ul>')
    
    _.each(this.collection.models, function(item){
      console.log('model: ', item)
      self.appendItem(item);
    }, this);
  }
})