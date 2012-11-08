
window.address2 = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},

  init: function() {
    console.log('Hello from Backbone!');

    this.router = new address2.Routers.ApplicationRouter();
    Backbone.history.start();    
  }
};

$(document).ready(function(){
  address2.init();
});
