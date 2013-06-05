require.config({
    baseUrl: 'js',
    paths: {
        jquery: 'libs/jquery-2.0.0',
        underscore: 'libs/underscore-1.4.4',
        backbone: 'libs/backbone-1.0.0',
        text: 'libs/text'
    },
    shim: {
        'backbone': { deps: ['underscore', 'jquery'], exports: 'Backbone' },
        'underscore': { exports: '_' },
        'jquery': { exports: '$' },
        'views/LogsView': { deps: ['backbone'] },
        'views/LogsFilterView': { deps: ['backbone'] },
        'views/LogsSearchView': { deps: ['backbone'] },
        'models/LogsFilterModel': { deps: ['backbone'] }
    }
});

require(['views/LogsView', 'views/LogsFilterView', 'views/LogsSearchView', 'models/LogsFilterModel'], function (LogsView, LogsFilterView, LogsSearchView, LogsFilterModel) {

    var filterModel = new LogsFilterModel();

    // step 1
    var logsView = new LogsView({el: $('#content'), model: filterModel});
    // $('#content').html(logsView.el); --> or you can attah to DOM after

    // step 2
    var searchView = new LogsSearchView({el: $('header'), model: filterModel});
    // $('header').html(new LogsSearchView().el);

    // step 3
    var filterView = new LogsFilterView({el: $('#navigation'), model: filterModel});
    // $('#navigation').html(new LogsSearchView().el);

});
