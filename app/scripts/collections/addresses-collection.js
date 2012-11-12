address2.Collections.AddressesCollection = Backbone.Collection.extend({

  model: address2.Models.AddressModel,

  localStorage: new Backbone.LocalStorage("address2.Collection"),

  // Comparator für default sort
  comparator: function (model) {
  	return model.get('name').toLowerCase();
  }

});
