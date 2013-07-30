class Authorizer extends Spine.Module
  @endpoint = 'http://vast-atoll-9182.herokuapp.com/api/v1'
  @token: null
  @user: null

  @setup: ->
    if localStorage['auth_token']
      @token = localStorage['auth_token']
      Spine.Ajax.defaults['data']['auth_token'] = @token
      console.log('Loaded: ' + @token)
    else
      delete localStorage['auth_token']

  @saveToken: (token) ->
    localStorage['auth_token'] = token
    @token = token
    Spine.Ajax.defaults['data']['auth_token'] = token

  @authorize: (username, password, newUser = false) ->
    username = $('#username').val()
    password = $('#password').val()
    endpoint = if newUser then "#{@endpoint}/registrations.json" else "#{@endpoint}/sessions.json"
    redirect_uri = if newUser then "/user/#{username}" else "/feed"
    error_html = if newUser then "<span class='error'>The username or password was incorrect.</span>" else "<span class='error'>Something went wrong, please try again later.</span>"
    json_data =
      user:
        name: username
        password: password

    $.ajax
      url: endpoint
      type: 'POST'
      data: json_data
      success: (data, textStatus, jqXHR) =>
        Spine.Route.navigate(redirect_uri, trans: 'right')
        @saveToken(data.data.auth_token)
      error: (jqXHR, textStatus, errorThrown) ->
        if newUser
          errors = JSON.parse(jqXHR.responseText)
          error_html = "<span class=\"error\">#{errors.info.join(". ")}.</span>"
        $('.hint').hide().fadeIn().html(error_html)

  @loggedIn: ->
    !!@token

module.exports = Authorizer
