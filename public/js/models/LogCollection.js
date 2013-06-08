define(['./LogModel'], function (LogModel) {

    var LogCollection = Backbone.Collection.extend({

        model: LogModel,

        url: 'data/logs.json',

        bySearch: function (search) {
            if(! textSearch){
               return this;
            }
            return new LogCollection(this.filter(function (model) {
                return model.get('path').indexOf(search) !== -1;
            }));
        },

        byStatuses: function (statuses) {
            return new LogCollection(this.filter(function (model) {
                return _.contains(statuses, model.get('status'));
            }));
        },

        byMethods: function (methods) {
            return new LogCollection(this.filter(function (model) {
                return _.contains(methods, model.get('method'));
            }));
        }
    });

    return LogCollection;
});