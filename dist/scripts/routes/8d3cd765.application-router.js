address2.Routers.ApplicationRouter = Backbone.Router.extend({

	routes: {
		"": "main"
	},

	initialize: function() {
		this.appView = new address2.Views.applicationView();
		this.addressManagerView = new address2.Views.addressManagerView();
	},

	main: function() {
		console.log('hello from main');
	}
});
