define(function() {

    var Log = Backbone.Model.extend({//TODO dans skeleton ?

	    parse : function(response){
	        var requestData = response.request.split(' ');
	        response.method = requestData[0];
	        response.path = requestData[1];
            return response;
	    }



    });

	var LogCollection = Backbone.Collection.extend({

	    model : Log,//TODO dans skeleton ?

	    url : 'data/logs.json',//TODO dans skeleton ?

	});

	return LogCollection;
});