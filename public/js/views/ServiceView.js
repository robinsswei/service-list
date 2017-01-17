var ServiceView = Backbone.View.extend({
  tagname: "li",
  
  initialize: function(){
    _.bindAll(this, "render")
    this.model.bind("change", this.render)
  },
  
  render: function(){
    this.$el.html(this.model.get('id') + this.model.get('yaml'))
    return this
  }
})