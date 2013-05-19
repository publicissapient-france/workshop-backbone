define(function(){
	return Backbone.Collection.extend({
		url: 'http://localhost:3000/logs',
		parse: function(response) {
			return _.map(response.logs, function(item) { 
				item.method = item.request.split(' ')[0];
				item.path = item.request.split(' ')[1];
				delete item.request; 
				return item;
			});
		},
		filterBy: function(statuses, methods, search) {
			filtered = this.filter(function(model) {
				var method = model.get('method'),
					path = model.get('path');

				return _.contains(statuses, model.get('status')) 
					&& _.contains(methods, method)
					&& (_.isEmpty(search) || path.indexOf(search) !== -1);
			});
			return new Backbone.Collection(filtered);
		}
	});
});