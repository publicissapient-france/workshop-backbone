define(['text!templates/table-line.tmpl'], function (template) {

    return Backbone.View.extend({

        tagName: 'tr',

        template: _.template(template),

        events: {
            'click': 'showDetails'
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },

        showDetails: function () {
            Backbone.trigger('details:show', this.model);
        }

    });
});
