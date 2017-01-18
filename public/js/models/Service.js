//http://stackoverflow.com/questions/8527694/what-is-the-least-ugly-way-to-force-backbone-sync-updates-to-use-post-instead-of
'use strict'

var Service = Backbone.Model.extend({
  urlRoot: "../api",
  
  idAttribute: "id",

  default: {
    "id":"",
    "status": "",
    "service": {},
    "yaml":"",
    "status": ""
  },
  
  parse: function(response){
    console.log("inside parse")
    var temp = {}
    
  },
  initialize: function(){
    console.log("Service " + this.id  + " has been initialized")
    console.log("Data:", this.id + " : "  + this.get("state"))
    console.log(this)

    this.sync("", this)

    this.on("invalid", function(model, error){
      console.log("Initialize error: " + error)
    })
    
    // Set up event handers to listen to modal change
    this.on('change', function(){
      if(this.hasChanged("yaml")){
        console.log("Yaml has been changed")
      }
    })
    
    this.on('change: yaml', function(){
      console.log("Message from specific listener: Yaml has been changed")
    })
  },
  
  constructor: function(attributes, options){
    console.log("Service\'s contructor had been called")
    Backbone.Model.apply(this, arguments)
  },
  
  getYaml: function(){
    console.log("Yaml: " + this.get("yaml"))
  },
  
  validate: function(attr){
    if(attr.id <= 0){
      return "Invalid value for ID supplied"
    }
    
    if(!attr.yaml){
      return "Empty yaml for the service"
    }
  },
  
  // http://backbonejs.org/#Sync
  sync: function(action, model, data){
    var options = {
      "service_id": this.id
    }
    
    switch (action) {

      // case "":
      //   this.url = this.urlRoot + "/listSubServices"
      //   break
      
      // case "":
      //   options["service_type"] = this.type
      //   options["service_state"] = this.state
        
      //   this.url = this.urlRoot + "/ServiceTransition"
      //   break
      // case "extract":
      //   this.url = this.urlRoot + "/extractServices"
      //   break

      case "validate":
        options["content"] = data // data is the yamlfile
        this.url = this.urlRoot + "/validateContent"
        break
        
      case "update":
        options["content"] = data // data is the yamlfile
        this.url = this.urlRoot + "/updateServices"
        break
        
      case "resolve":
        options["target_state"] = data // target state
        this.url = this.urlRoot + "/resolveService"
        break
        
      case "delete":
        this.url = this.urlRoot + "/removeService"
        break
      
      default:
        this.url = this.urlRoot + "/extractServices"
        
    }
    
    // create -> POST
    // read   -> GET
    // update -> PUT
    // patch  -> PATCH
    // delete -> DELETE
    Backbone.sync("create", model, options)
  },

})
// tutorial at http://dailyjs.com/2012/12/20/backbone-tutorial-4/