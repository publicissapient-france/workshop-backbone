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
        'views/LogsSearchView': { deps: ['backbone'] },
        'models/LogsAppModel': { deps: ['backbone'] }
    }
});

require(['views/LogsView', 'views/LogsFilterView', 'views/LogsSearchView', 'models/LogsAppModel'], function(LogsView, LogsFilterView, LogsSearchView, LogsAppModel) {
    var model = new LogsAppModel();

	$('#content').html(new LogsView({model: model}).el);
    $('#navigation').html(new LogsFilterView({model: model}).el);
    $('header').html(new LogsSearchView({model: model}).el);
});