WallController = require 'controllers/wall_controller'
MainController = require 'controllers/main_controller'
UserController = require 'controllers/user_controller'

class App extends Stage.Global
  events:
    'tap .nav-btn': 'navTap'
  navTap: (e) ->
    @footer.find('.nav-btn.active').removeClass('active')
    $(e.currentTarget).addClass('active')
    @navigate('/' + e.currentTarget.id)
  constructor: ->
    super

    # Setup the AJAX loader
    el = $('<div id="loader"><i class="icon-spinner icon-spin"></i><br/><span class="text">Loading...</span></div>').prependTo($('body')).hide()

    $(document).ajaxSend( (e, xhr, options) ->
      el.show() if options.url.match(Spine.Model.host)
    ).ajaxStop( =>
      el.hide()
    )

    @footer.html require('views/main/navbar')
    @wallController = new WallController
    @mainController = new MainController
    @userController = new UserController
    Spine.Route.setup()

# Start application after document is ready
# and connect it with body tag
$(document).ready ->
  # $(document).ontouchstart = (e) ->
  #   e.preventDefault
  exports.app = new App({el: $("body")});
