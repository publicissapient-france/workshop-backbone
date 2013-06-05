define(function () {

	return Backbone.Model.extend({

		defaults: {
			host: 'my host',
			date: 'my date',
			request: 'my request',
			status: 'my status',
			size: 'my size',
			method: 'my method',
			path: 'my path'
		}

	});
});