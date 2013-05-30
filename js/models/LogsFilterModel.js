define(function(){
	return Backbone.Model.extend({

        defaults : {
            search      : "",
            statuses    : new Backbone.Collection(),
            methods     : new Backbone.Collection()
        },

		initialize: function() {
			this.listenTo(this.get("statuses"), 'change', this.change);
			this.listenTo(this.get("methods"), 'change', this.change);
		},

		params: function(statuses, methods) {
			this.get("statuses").reset(statuses);
			this.get("methods").reset(methods);
			this.change();
		},

		change: function() {
			this.trigger('change');
		},

		toJSON: function() {
			return { 
				statuses: this.get("statuses").toJSON(),
				methods: this.get("methods").toJSON()
			}
		}

	});
});