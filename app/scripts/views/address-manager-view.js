address2.Views.addressManagerView = Backbone.View.extend({

  el: '#main',
  template: _.template( $( '#address-manager-view' ).html() ),

  events: {
    "click #new": "newAddress",
  },

  initialize: function() {
    this.addresses = new address2.Collections.AddressesCollection();

    // rerender the view, if collection changes
    this.addresses.on('add', this.render, this);

    // populate for debug
    //this.addresses.add([{name:"Kühn", vorname:"Stefan", strasse: "Schwarzwaldstrasse 13"}]);    
    // this.addresses.add([{name:"Kim", vorname:"Deug-Yun", strasse: "Schwarzwaldstrasse 13"}]);    
    this.addresses.fetch();    

    console.log('hello from address2.Views.addressManagerView ');
    this.render();
  },

  render: function() {
    this.$el.empty();
    var html = this.template({});
    this.$el.html( html);
    this.addresses.each( this.renderAddress, this);
  },

  renderAddress: function(adr) {
    var addressItem = new address2.Views.addressView({
      model: adr
    });
    this.$el.append( addressItem.$el);
  },

  newAddress: function() {
    var adr = new address2.Models.AddressModel(); // create empty
    adr.set('mode', 'new');
    this.addresses.add( adr);

  }

});
