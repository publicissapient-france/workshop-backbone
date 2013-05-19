define(function(){
	return Backbone.Collection.extend({
		url: 'http://localhost:3000/logs',
		parse: function(response) {
			return response.logs;
		},
		filterBy: function(statuses, methods, search) {
			filtered = this.filter(function(model) {
				var method = model.get('request').split(' ')[0],
					path = model.get('request').split(' ')[1];

				return _.contains(statuses, model.get('status')) 
					&& _.contains(methods, method)
					&& (_.isEmpty(search) || path.indexOf(search) !== -1);
			});
			return new Backbone.Collection(filtered);
		}
	});
});