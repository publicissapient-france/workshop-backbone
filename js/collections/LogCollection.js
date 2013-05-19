define(function(){
	return Backbone.Collection.extend({
		url: 'http://localhost:3000/logs',
		parse: function(response) {
			return response.logs;
		},
		filterByStatusesAndMethods: function(statuses, methods) {
			filtered = this.filter(function(model) {
				var method = model.get('request').split(' ')[0];
				return _.contains(statuses, model.get('status')) && _.contains(methods, method);
			});
			return new Backbone.Collection(filtered);
		}
	});
});