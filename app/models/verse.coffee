class Verse extends Spine.Model
  @configure 'Verse', 'lines', 'score', 'tags', 'rhyme_scheme'
  @extend Spine.Model.Ajax
  @belongsTo 'User', 'models/user'

  @url: 'http://vast-atoll-9182.herokuapp.com/api/v1/microposts.json'

  content: ->
    @lines.join('\n')

  @generate: ->
    v = new Verse()
    v.tags = _.shuffle('Lorem ipsum dolor sit amet adipisicing elit'.split(' '))
    v.lines = _.shuffle(['Lorem ipsum dolor sit amet, adipisicing elit',
      'sed do eiusmod tempor incididunt ut labore magna aliqua',
      'nisi ut aliquid ex ea commodi consequatur',
      'eum fugiat quo voluptas nulla pariatur'])
    v.numLines = Math.floor(Math.random() * 3) + 2
    v.lines = v.lines.slice(0, v.numLines)
    return v

module.exports = Verse
