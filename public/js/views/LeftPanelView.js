define(['text!templates/filter.tmpl'], function (template) {

    return Backbone.View.extend({

        events: {
            'click input[name="status"]': 'updateFilterStatuses',
            'click input[name="method"]': 'updateFilterMethods'
        },

        initialize: function () {
            this.render();
        },

        render: function () {
            this.$el.html(template);
        },

        updateFilterStatuses: function () {
            var filteredStatuses = this.$('input[name="status"]:checked').map(function () {
                return parseInt($(this).val());
            }).get();
            this.model.set('statuses', filteredStatuses);
        },

        updateFilterMethods: function () {
            var filteredMethods = this.$('input[name="method"]:checked').map(function () {
                return $(this).val();
            }).get();
            this.model.set('methods', filteredMethods);
        }

    });
});