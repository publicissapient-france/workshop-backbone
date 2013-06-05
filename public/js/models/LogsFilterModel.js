define(function(){

	return Backbone.Model.extend({

		defaults: {
			search: '',
			statuses: [200, 204, 301, 404],
			methods: ['GET', 'POST', 'PUT', 'DELETE']
		},

		initialize: function() {
		}

	});
});