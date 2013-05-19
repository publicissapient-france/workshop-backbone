define(['text!../templates/search.tmpl'], function(template) {
	return Backbone.View.extend({
		initialize: function() {
			this.listenToOnce(this.model, 'change', this.render);
		},
		events: {
			'keyup input': 'search'
		},
		render: function() {
			this.$el.html(template);
		},
		search: function(event) {
			this.model.set('search', $(event.target).val());
		}
	});
});