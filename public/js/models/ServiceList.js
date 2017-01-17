var Service = require("js/model/Service")

var ServiceList = Backbone.Collection.extend({
  model: Service,
  
  url: "../api/services",
  
  initialize: function(){
    this.fetch({
      success: this.fetchSuccess,
      error: this.fetchError
    })
  },
  
  fetchSuccess: function(){
    console.log("Collection fetch success", response)
    console.log("Collection models: ", collection.models)
  },
  
  fetchError: function(){
    throw new Error("Services fetch error")
  }
})