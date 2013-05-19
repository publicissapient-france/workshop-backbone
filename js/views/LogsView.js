define(['collections/LogCollection', 'text!../templates/table.tmpl'], function(LogCollection, template) {
	return Backbone.View.extend({
		template: _.template(template),
		initialize: function() {
			this.collection = new LogCollection();
			
			this.listenTo(this.collection, 'sync', this.render);
			this.listenTo(this.model.statuses, 'change', this.renderFiltered);
			this.listenTo(this.model.methods, 'change', this.renderFiltered);
			this.listenToOnce(this.collection, 'sync', this._hydrateModel);

			this.collection.fetch();
		},
		render: function() {
			console.log(this.collection.toJSON());
			this.$el.html(this.template(this.collection.toJSON()));
		},
		renderFiltered: function() {
			var statuses = _.pluck(this.model.statuses.where({'checked': true}), 'id');
			var methods = _.pluck(this.model.methods.where({'checked': true}), 'id');

			this.$el.html(this.template(this.collection.filterByStatusesAndMethods(statuses, methods).toJSON()));
		},
		_hydrateModel: function() {
			this.model.clear();
			var statuses = this._toKeyArray(_.sortBy(_.uniq(this.collection.pluck('status')), function(status) { return status; }));
			var methods = this._toKeyArray(_.uniq(_.map(this.collection.pluck('request'), function(model) { return model.split(' ')[0]; })));
			this.model.params(statuses, methods);
		},
		_toKeyArray: function(obj) {
			return _.reduce(obj, function(memo, value) {
				memo.push({id: value, checked: true});
				return memo;
			}, []);
		}
	});
});