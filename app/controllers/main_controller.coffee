User = require('models/user')
Verse = require('models/verse')
Authorizer = require('authorizer')

class LoginPanel extends Panel
  className: 'main loginView'
  events:
    'tap #nologin': 'nologin'
    'tap #login': 'login'
    'tap #signup': 'signup'
    'keydown #password': 'loginShortcut'

  loginShortcut: (e) =>
    if e.keyCode is 13
      @login()

  login: ->
    username = $('#username').val()
    password = $('#password').val()
    Authorizer.authorize(username, password)

  signup: ->
    username = $('#username').val()
    password = $('#password').val()
    Authorizer.authorize(username, password, true)

  nologin: ->
    @navigate('/feed', trans: 'right')

  constructor: ->
    super
    @active @render

  render: =>
    @html require('views/main/login')()

class SubmitPanel extends Panel
  className: 'main submitView'
  events:
    'tap #submit-btn': 'submitVerse'

  submitVerse: ->
    @log('verseActivate')
    lines = []
    lines.push $('#line_1').val()
    lines.push $('#line_2').val()
    lines.push $('#line_3').val()
    lines.push $('#line_4').val()
    lines = (l for l in lines when $.trim(l) != '')
    # Join the lines for now
    lines.join('\n')
    verse = new Verse(
      lines: lines
      user: Authorizer.user
    )
    verse.save()

  constructor: ->
    super
    @active @render

  render: =>
    @html require('views/main/submit')()

class ExplorePanel extends Panel
  className: 'main exploreView'

  constructor: ->
    super
    @active @render

  render: =>
    @html require('views/main/explore')()

class MainController extends Spine.Controller
  constructor: ->
    super
    Authorizer.setup()
    @loginPanel = new LoginPanel
    @submitPanel = new SubmitPanel
    @explorePanel = new ExplorePanel
    @routes
      '/': (params) -> @loginPanel.active(params)
      '/submit': (params) -> @submitPanel.active(params)
      '/explore': (params) -> @explorePanel.active(params)

module.exports = MainController
