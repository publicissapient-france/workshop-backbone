define(['./LogModel'], function (LogModel) {

    var LogCollection = Backbone.Collection.extend({

        model: LogModel,

        url: 'data/logs.json',

        byTextSearch: function (textSearch) {
            if(! textSearch){
                return this;
            }
            return new LogCollection(this.filter(function (model) {
                return model.get('path').indexOf(textSearch) !== -1;
            }));
        }
    });

    return LogCollection;
});