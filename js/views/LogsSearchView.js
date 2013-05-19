define(['text!../templates/search.tmpl'], function(template) {
	return Backbone.View.extend({
		initialize: function() {
			this.listenToOnce(this.model, 'change', this.render);
		},
		events: {
			'keyup input': 'search',
			'click a': 'reset'
		},
		render: function() {
			this.$el.html(template);
		},
		searchByValue: function(value) {
			this.toggleX(value);
			this.model.set('search', value);
		},
		search: function(event) {
			this.searchByValue($(event.target).val());
		},
		reset: function() {
			this.$('input').val('');
			this.searchByValue('');
		},
		toggleX: function(value) {
			if(_.isEmpty(value))
				this.$('a').css('display', 'none');
			else
				this.$('a').css('display', 'block');
		}
	});
});