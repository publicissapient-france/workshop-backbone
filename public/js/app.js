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
        'views/LeftPanelView': { deps: ['backbone'] },
        'views/SearchView': { deps: ['backbone'] },
        'models/FilterModel': { deps: ['backbone'] }
    }
});

require(["Handlebars", 'views/LogsView', 'views/LeftPanelView', 'views/SearchView', 'models/FilterModel'], function(Handlebars, LogsView, LeftPanelView, SearchView, FilterModel) {
    // etape 1 : logsView

    // etape 2 : searchView

    // etape 3 : filterView

});