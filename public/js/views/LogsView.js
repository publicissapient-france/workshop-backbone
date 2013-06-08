define(['models/LogCollection', 'text!templates/table.tmpl', 'views/LogLineView'], function (LogCollection, template, LogLineView) {

    return Backbone.View.extend({

        initialize: function () {
            console.log("LogsView initializing");
            this.collection = new LogCollection();
            this.listenTo(this.collection, "sync", this.render);
            this.listenTo(this.model, "change", this.renderFilteredResults);

            this.collection.fetch();
        },

        render: function () {
            console.log("LogsView rendering");
            this.$el.html(template);
            var tbody = this.$('tbody').empty();
            this.collection.each(function (log) {
                tbody.append(new LogLineView({model: log}).render().el);
            });
        },

        renderFilteredResults: function () {
            var search = this.model.get('search'),
                statuses = this.model.get('statuses'),
                methods = this.model.get('methods');

            var results = this.collection
                .bySearch(search)
                .byStatuses(statuses)
                .byMethods(methods);

            var tbody = this.$('tbody').empty();
            results.each(function (log) {
                tbody.append(new LogLineView({model: log}).render().el);
            });
        }

    });
});