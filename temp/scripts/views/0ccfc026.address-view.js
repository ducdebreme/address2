address2.Views.addressView = Backbone.View.extend({

  //template: address
  template: '#address-item',

  initialize: function() {
	this.addressTempl = _.template( $( this.template ).html() );

  	this.render();
  },

  render: function() {
  	var html = this.addressTempl( this.model.toJSON());
  	this.$el.html( html);
  }



});
