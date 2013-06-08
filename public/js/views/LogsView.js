define(['models/LogCollection', 'text!templates/table.tmpl'], function (LogCollection, template) {

    return Backbone.View.extend({

        template: _.template(template),

        events: {
        },

        initialize: function () {
            console.log("LogsView initializing");
            this.collection = new LogCollection();
            this.listenTo(this.collection, "sync", this.render);
            this.listenTo(this.model, "change", this.render);

            this.collection.fetch();
        },

        render: function () {
            console.log("LogsView rendering");
            this.$el.html(this.template(this.filterCollection().toJSON()));
        },

        filterCollection : function() {
            var textSearch = this.model.get('search');
            return this.collection.byTextSearch(textSearch);
        }


    });
});