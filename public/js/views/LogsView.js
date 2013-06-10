define(['models/LogCollection', 'text!templates/table.tmpl', 'views/LogLineView'], function (LogCollection, template, LogLineView) {

    return Backbone.View.extend({

        initialize: function () {
            console.log("LogsView initializing");
            this.collection = new LogCollection();
            this.listenTo(this.collection, "sync", this.render);
            this.listenTo(this.model, "change", this.render);

            this.collection.fetch();
        },

        render: function () {
            console.log("LogsView rendering");
            this.$el.html(template);
            var tbody = this.$('tbody');
            this.filterCollection().each(function (log) {
                tbody.append(new LogLineView({model: log}).render().el);
            });
        },

        filterCollection : function() {
            var search = this.model.get('search'),
                statuses = this.model.get('statuses'),
                methods = this.model.get('methods');

            return this.collection.bySearch(search)
                .byStatuses(statuses)
                .byMethods(methods);
        }

    });
});