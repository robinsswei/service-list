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
    this.save()
  },
  
  fetchSuccess: function(){
    console.log("Collection fetch success", response)
    console.log("Collection models: ", collection.models)
  },
  
  fetchError: function(){
    throw new Error("Services fetch error")
  },

  save: function(){                                                                                                                                                                                                                                                                                                                                                     
    this.sync('create', this, {                                                                                                                                                                                                                                                                                                                                     
        success: function(){                                                                                                                                                                                                                                                                                                                                          
          console.log('users c!');                                                                                                                                                                                                                                                                                                                              
        }                                                                                                                                                                                                                                                                                                                                                             
      })                                                                                                                                                                                                                                                                                                                                                             
    }
})