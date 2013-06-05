define(['./LogModel'], function(LogModel) {

	var LogCollection = Backbone.Collection.extend({

	    model:LogModel

	});

	return LogCollection;
});