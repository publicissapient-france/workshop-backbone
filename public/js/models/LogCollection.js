define(['./LogModel'], function (LogModel) {

    var LogCollection = Backbone.Collection.extend({

        model: LogModel,

        url: 'data/logs.json',

        byTextSearch: function (textSearch) {
            return new LogCollection(this.filter(function (model) {
                return model.get('path').indexOf(textSearch) !== -1;
            }));
        }
    });

    return LogCollection;
});