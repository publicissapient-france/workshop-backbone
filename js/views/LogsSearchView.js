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
		_searchByValue: function(value) {
			this._toggleX(value);
			this.model.set('search', value);
		},
		search: function(event) {
			this._searchByValue($(event.target).val());
		},
		reset: function(event) {
			event.preventDefault();
  			
			this.$('input').val('');
			this._searchByValue('');
		},
		_toggleX: function(value) {
			if(_.isEmpty(value))
				this.$('a').css('display', 'none');
			else
				this.$('a').css('display', 'block');
		}
	});
});