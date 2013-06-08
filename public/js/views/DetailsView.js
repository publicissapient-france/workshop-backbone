define(['text!templates/details.tmpl'], function (template) {

    return Backbone.View.extend({

        template: _.template(template),

        initialize: function () {
            this.listenTo(Backbone, 'details:show', this.renderDetails);
            this.render();
        },

        render: function () {
            this.$el.html(this.template());
        },

        renderDetails: function (log) {
            this.$el.html(this.template(log.toJSON()));
        }

    });
});
