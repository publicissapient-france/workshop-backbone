define(['text!../templates/filter.tmpl'], function(template) {
	return Backbone.View.extend({
		template: _.template(template),
		initialize: function() {
			this.listenTo(this.model, 'change', this.render);
		},
		events: {
			'click #statuses input': 'changeStatuses',
			'click #methods input': 'changeMethods'
		},
		render: function() {
			this.$el.html(this.template(this.model.toJSON()));
		},
		changeStatuses: function(event) {
			this.toggle(event, this.model.get("statuses"));
		},
		changeMethods: function(event) {
			this.toggle(event, this.model.get("methods"));
		},
		toggle: function(event, collection) {
			var id = event.target.id;
			var model = collection.get(id);
			model.set('checked', !model.get('checked'));	
		}
	});
});