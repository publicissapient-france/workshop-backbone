define(['collections/LogCollection', 'text!../templates/table.tmpl'], function(LogCollection, template) {
	return Backbone.View.extend({
		template: _.template(template),
		initialize: function() {
			this.collection = new LogCollection();
			
			this.listenTo(this.model, 'change', this.render);
			this.listenToOnce(this.collection, 'sync', this._hydrateModel);

			this.collection.fetch();
		},
		render: function() {
			var statuses = _.pluck(this.model.statuses.where({'checked': true}), 'id');
			var methods = _.pluck(this.model.methods.where({'checked': true}), 'id');
			var search = this.model.get('search');

			this.$el.html(this.template(this.collection.byStatus(statuses).byMethod(methods).bySearch(search).toJSON()));
		},
		_hydrateModel: function() {
			this.model.clear();
			var statuses = this._toKeyArray(_.sortBy(_.uniq(this.collection.pluck('status')), function(status) { return status; }));
			var methods = this._toKeyArray(_.uniq(this.collection.pluck('method')));
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