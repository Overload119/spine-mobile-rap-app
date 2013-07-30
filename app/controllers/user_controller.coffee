class UserShowPanel extends Panel
  constructor: ->
    super
    @active @render

  render: =>
    @html require('views/user/show')()


class UserEditPanel extends Panel
  constructor: ->
    super

class UserController extends Spine.Controller
  constructor: ->
    super
    @userEditPanel = new UserEditPanel
    @userShowPanel = new UserShowPanel
    @routes
      '/user': (params) -> @userEditPanel.active(params)
      '/user/:name': (params) -> @userShowPanel.active(params)


module.exports = UserController
