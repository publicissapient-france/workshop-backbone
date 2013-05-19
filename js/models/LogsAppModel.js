define(function(){
	return Backbone.Model.extend({
		statuses: new Backbone.Collection(),
		methods: new Backbone.Collection(),
		initialize: function() {
			this.listenTo(this.statuses, 'change', this.change);
			this.listenTo(this.methods, 'change', this.change);
		},
		params: function(statuses, methods) {
			this.statuses.reset(statuses);
			this.methods.reset(methods);
			this.change();
		},
		change: function() {
			this.trigger('change');
		},
		toJSON: function() {
			return { 
				statuses: this.statuses.toJSON(),
				methods: this.methods.toJSON()
			}
		}
	});
});