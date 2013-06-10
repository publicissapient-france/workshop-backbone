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
        'views/LeftPanelView': { deps: ['backbone'] },
        'views/SearchView': { deps: ['backbone'] },
        'views/DetailsView': { deps: ['backbone'] },
        'models/FilterModel': { deps: ['backbone'] }
    }
});

require(['views/LogsView', 'views/LeftPanelView', 'views/SearchView', 'views/DetailsView', 'models/FilterModel'], function (LogsView, LeftPanelView, SearchView, DetailsView, FilterModel) {

    var filterModel = new FilterModel();

    // step 1
    var logsView = new LogsView({el: $('#content'), model: filterModel});
    // $('#content').html(logsView.el); --> or you can attah to DOM after

    // step 2
    var searchView = new SearchView({el: $('header'), model: filterModel});
    // $('header').html(new SearchView().el);

    // step 3
    var filterView = new LeftPanelView({el: $('#navigation'), model: filterModel});
    // $('#navigation').html(new LeftPanelView().el);

    // step 4
    var detailsView = new DetailsView({el: $('#detail')});
    // $('#detail').html(new DetailsView().el);

});
