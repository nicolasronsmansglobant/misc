$(function () {
  // Model
  var Player = Backbone.Model.extend({
    defaults: {
      name: 'Unknown',
      position: 'Substitute'
    }
  });

  // Collection
  var PlayerList = Backbone.Collection.extend({
    model: Player,
    localStorage: new Backbone.LocalStorage('backbone-app')
  });

  // instantiates the collection
  var Team = new PlayerList;

  // Views
  var PlayerView = Backbone.View.extend({
    tagName: 'li', // defines DOM element as container of the template
    template: _.template($('#template-player').html().trim()), // method which returns a populated (by underscore) template
    render: function() {
      // adds populated template to the container (li)
      this.$el.html(this.template(this.model.toJSON()));

      // this is allowing chaining from where the view was created (playerView.render().xxx())
      return this.$el;
    }
  });

  var AppView = Backbone.View.extend({
    el: $('#app')[0], // will automatically map $el to $('#app')
    initialize: function () {
      // will be triggered either by Team.fetch() or Team.create()
      this.listenTo(Team, 'add', this.addPlayer);

      // fetches data from localStorage
      Team.fetch();

      // Creates entries if nothing was stored in localStorage before
      if (!Team.length) {
        Team.create({ name: 'Messi', position: 'Forward' });
        Team.create({ name: 'Isco', position: 'Midfielder' });
        Team.create({ name: 'Tiago Silva', position: 'Defender' });
        Team.create({ name: 'Neuer', position: 'Goalkeeper' });
        Team.create();
        Team.create();
        Team.create();
      }
    },
    addPlayer: function (player) {
      // creates the view with the data of the model
      var playerView = new PlayerView({ model: player });

      // appends the created view to the $el of this view ($('#app'))
      this.$el.find('#players').append(playerView.render());
    }
  });

  // instantiates the view
  var App = new AppView;
});
