define(function() {

    var Log = Backbone.Model.extend({

	    parse : function(response){
	        var requestData = response.request.split(' ');
	        response.method = requestData[0];
	        response.path = requestData[1];
            return response;
	    }



    });

	var LogCollection = Backbone.Collection.extend({

	    model : Log,

	    url : 'data/logs.json',

	});

	return LogCollection;
});