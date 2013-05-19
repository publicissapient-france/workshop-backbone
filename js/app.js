require.config({
	baseUrl: 'js',
    paths: {
        jquery: 'jquery-2.0.0',
        underscore: 'underscore-1.4.4',
        backbone: 'backbone-1.0.0'
    },
    shim: {
        'backbone': { deps: ['underscore', 'jquery'], exports: 'Backbone' },
        'underscore': { exports: '_' },
        'jquery': { exports: '$' },
		'views/LogsView': { deps: ['backbone'] },
        'views/LogsFilterView': { deps: ['backbone'] },
        'models/LogsAppModel': { deps: ['backbone'] }
    }
});

require(['views/LogsView', 'views/LogsFilterView', 'models/LogsAppModel'], function(LogsView, LogsFilterView, LogsAppModel) {
    var model = new LogsAppModel();

	$('#content').html(new LogsView({model: model}).el);
    $('#navigation').html(new LogsFilterView({model: model}).el);
});