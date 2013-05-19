define(function(){
	return Backbone.Model.extend({
		statuses: new Backbone.Collection(),
		methods: new Backbone.Collection(),
		params: function(statuses, methods) {
			this.statuses.reset(statuses);
			this.methods.reset(methods);
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