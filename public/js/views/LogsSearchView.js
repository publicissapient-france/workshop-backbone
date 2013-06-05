define(['text!templates/search.tmpl'], function (template) {

    return Backbone.View.extend({

        events: {
            'keyup input': 'updateFilter'
        },

        initialize: function () {
            this.render();
        },

        render: function () {
            this.$el.html(template);
        },

        updateFilter: function (event) {
            event.preventDefault();
            this.model.set('search', this.$('input').val());
        }

    });
});