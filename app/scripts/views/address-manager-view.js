address2.Views.addressManagerView = Backbone.View.extend({

  el: '#address-manager',


  initialize: function() {
  	this.addresses = new address2.Collections.AddressesCollection();

  	// rerender the view, if collection changes
  	this.addresses.on('add', this.render, this);

  	// populate for debug
	this.addresses.add([{name:"Kühn", vorname:"Stefan"}]);  	

  	console.log('hello from address2.Views.addressManagerView ');
  	console.log(this);
  	this.render();
  },

  render: function() {
  	this.$el.empty();
  	this.addresses.each( this.renderAddress, this);
  },

  renderAddress: function(adr) {
  	var addressItem = new address2.Views.addressView({
  		model: adr
  	});
  	this.$el.append( addressItem.$el);

  }

});
