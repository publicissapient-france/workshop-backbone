require.config({
	baseUrl: 'js',
    paths: {
        jquery: 'libs/jquery-2.0.0',
        underscore: 'libs/underscore-1.4.4',
        backbone: 'libs/backbone-1.0.0',
        Handlebars  : "libs/handlebars-1.0.0",
        text: 'libs/text'
    },
    shim: {
        'backbone': { deps: ['underscore', 'jquery'], exports: 'Backbone' },
        Handlebars : {  exports: "Handlebars" },
        'underscore': { exports: '_' },
        'jquery': { exports: '$' },
		'views/LogsView': { deps: ['backbone'] },
        'views/LogsFilterView': { deps: ['backbone'] },
        'views/LogsSearchView': { deps: ['backbone'] },
        'models/LogsFilterModel': { deps: ['backbone'] }
    }
});

require(["Handlebars", 'views/LogsView', 'views/LogsFilterView', 'views/LogsSearchView', 'models/LogsFilterModel'], function(Handlebars, LogsView, LogsFilterView, LogsSearchView, LogsFilterModel) {
    // etape 1 : logsView

    // etape 2 : searchView

    // etape 3 : filterView

});