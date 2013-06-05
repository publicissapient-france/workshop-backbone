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
        'views/DetailsView': { deps: ['backbone'] },
        'models/LogsFilterModel': { deps: ['backbone'] }
    }
});

require(['views/LogsView', 'views/LogsFilterView', 'views/LogsSearchView', 'views/DetailsView', 'models/LogsFilterModel'], function (LogsView, LogsFilterView, LogsSearchView, DetailsView, LogsFilterModel) {

    var filterModel = new LogsFilterModel();

    // step 1
    var logsView = new LogsView({el: $('#content'), model: filterModel});
    // $('#content').html(logsView.el); --> or you can attah to DOM after

    // step 2
    var searchView = new LogsSearchView({el: $('header'), model: filterModel});
    // $('header').html(new LogsSearchView().el);

    // step 3
    var filterView = new LogsFilterView({el: $('#navigation'), model: filterModel});
    // $('#navigation').html(new LogsFilterView().el);

    // step 4
    var detailsView = new DetailsView({el: $('#detail')});
    // $('#detail').html(new DetailsView().el);

});
