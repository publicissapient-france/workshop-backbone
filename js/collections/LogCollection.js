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
				return _.contains(statuses, model.get('status')) 
					&& _.contains(methods, model.get('method'))
					&& (_.isEmpty(search) || model.get('path').indexOf(search) !== -1);
			});
			return new Backbone.Collection(filtered);
		}
	});
});