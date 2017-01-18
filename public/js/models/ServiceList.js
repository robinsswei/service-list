'use strict'

var ServiceList = Backbone.Collection.extend({
  model: Service,
  
  url: "../api/listServices",
  
  initialize: function(){
    // this.fetch({
    //   success: this.fetchSuccess,
    //   error: this.fetchError
    // })
    // 
    this.sync()
  },
  
  fetchSuccess: function(){
    console.log("Collection fetch success", response)
    console.log("Collection models: ", collection.models)
  },
  
  fetchError: function(){
    throw new Error("Services fetch error")
  },

  sync: function(){ 
    var self = this                                                                             
    Backbone.sync('create', this, {                                        
      success: function(data, status){
        console.log("Got service list:", data)   
        //  _.each(data.services, function (service) {
        //   var serviceModel = new self.model(service)
        //   self.add(serviceModel)
        // });                                
        for(var serviceId in data.services){
          console.log("ServiceId: " + serviceId)
          var serviceModel = new self.model({"id": serviceId})
          self.add(serviceModel)
        }             
      }                                                                                         
    })                                                                                             
  },

  // parse: function(response, options) {
  //   // For some reason POST requests return a different data structure.
  //    var self = this;
  //     return _.map(response.services, function (service) {
  //       return new self.model(service, options);
  //     });
  // }
})