address2.Views.addressView = Backbone.View.extend({

  //template: address
  template: '#address-item',
  editTemplate: '#address-item-edit',

  events: {
    "click #edit": "editAddress",
    "click #save": "saveAddress",
  },

  initialize: function() {
    this.templates = {};
    this.templates.address = _.template( $( this.template ).html() );
    this.templates.addressEdit = _.template( $( this.editTemplate ).html() );

    // rerender the view, if model changes
    this.model.on('change', this.render, this);

    this.render();
  },

  render: function() {
  	var html = this.templates.address( this.model.toJSON());
  	this.$el.html( html);
  },

  // switch to Edit-Mode
  editAddress: function() {
    var html = this.templates.addressEdit( this.model.toJSON());
    this.$el.html( html);
  },

  saveAddress: function(e) {
    var formData = {}, changed = false;

    // gather the entered form data and save them into model
    $(e.target).closest('form').find('input').each( function(){
      var el = $(this);
      formData[ el.attr("name")] = el.val();
    });
    this.model.set(formData);
  }

});
