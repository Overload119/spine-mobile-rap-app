Verse = require('../models/verse')

class WallFeed extends Panel
  className: 'wall wallFeedView'

  constructor: ->
    super
    @header.html require('views/wall/wall_filter')()
    @active @render

  events:
    'tap .more-btn': 'viewVerse'
    'tap .like-btn': 'likeVerse'

  viewVerse: (e) ->
    @navigate('/verse/1', trans: 'right')

  likeVerse: (e) ->
    el = $(e.currentTarget)
    el.addClass('apply-like')

  render: =>
    $('#feed').addClass('active') unless $('#feed').hasClass('active')
    @html require('views/wall/feed')()

class WallVerse extends Panel
  className: 'wall verseView'

  constructor: ->
    super
    @active @render

  events:
    'tap .back-btn': 'back'
    'tap .analyze-btn': 'analyze'

  highlightVerse: (highlightData) ->
    matchingPalette = ['col-blue', 'col-red', 'col-orange', 'col-gray', 'col-pink']
    m = 0
    for match, index in highlightData
      matchElements = ($('#w'+ i) for i in match)

      # Cycle through the colors
      m = m + 1
      m = 0 if m == matchingPalette.length

      # Transition all words in a delay
      transitionDelay = index * 250
      transitionColor = matchingPalette[m]

      ((transitionColor, transitionDelay, matchElements) ->
        fnTransition = ->
          for elem in matchElements
            elem.addClass(transitionColor)

        setTimeout(fnTransition, transitionDelay)
      )(transitionColor, transitionDelay, matchElements)

  analyze: (e) ->
    el = $(e.currentTarget)
    if (!el.hasClass('apply-analyze'))
      el.addClass('apply-analyze')
      @highlightVerse([[1,2],[3,6],[7,9,12]])

  back: (e) ->
    @navigate('/feed', trans: 'left')

  render: =>
    randomVerse = Verse.generate()
    @html require('views/wall/verse')(randomVerse)

class WallController extends Spine.Controller
  constructor: ->
    super
    @wallfeed = new WallFeed
    @wallverse = new WallVerse
    @routes
      '/feed': (params) -> @wallfeed.active(params)
      '/verse/:id': (params) -> @wallverse.active(params)


module.exports = WallController
