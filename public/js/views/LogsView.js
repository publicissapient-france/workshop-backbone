define(['models/LogCollection', 'text!../templates/table.tmpl'], function(LogCollection, tableTpl) {
	var LogsView = Backbone.View.extend({
	    template:_.template(tableTpl),

        events: {
        },

        initialize: function() {
        },

        render: function() {
        }

	});

    return LogsView;
});