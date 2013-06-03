define(['models/LogCollection', 'text!../templates/table.tmpl'], function(LogCollection, tableTpl) {
	var LogsView = Backbone.View.extend({

        // underscore : template : _.template(tableTpl)
        // handlebars : template : Handlebars.compile(tableTpl)

        events: {
        },

        initialize: function() {
        },

        render: function() {
        }

	});

    return LogsView;
});