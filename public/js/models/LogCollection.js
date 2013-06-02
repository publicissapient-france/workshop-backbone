define(function() {

    var Log = Backbone.Model.extend({
    });


	var LogCollection = Backbone.Collection.extend({

	    model:Log

	});

	return LogCollection;
});