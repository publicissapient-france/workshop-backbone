define(function() {

	var LogCollection = Backbone.Collection.extend({

		url: '/data/logs.json',

        parse: function(response) {
			return _.map(response.logs, function(item) { 
				item.method = item.request.split(' ')[0];
				item.path = item.request.split(' ')[1];
				delete item.request; 
				return item;
			});
		},

        byStatus: function(statuses) {
			return this.filterBy(function(model) { return _.contains(statuses, model.get('status')); });
		},

        byMethod: function(methods) {
			return this.filterBy(function(model) { return _.contains(methods, model.get('method')); });
		},

        bySearch: function(search) {
			return this.filterBy(function(model) { return _.isEmpty(search) || model.get('path').indexOf(search) !== -1; });
		},

		filterBy: function(callback) {
			var filtered = this.filter(function(model) {
				return callback(model);
			});
			return new LogCollection(filtered);	
		}
	});

	return LogCollection;
});