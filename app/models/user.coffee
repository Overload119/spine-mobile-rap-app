class User extends Spine.Model
  @configure 'User', 'email', 'id', 'reputation', 'avg_rhyme_rank', 'todo', 'name'
  @extend Spine.Model.Ajax
  @url: 'http://murmuring-falls-6254.herokuapp.com/users'
  @hasMany 'Verse', 'models/verse'

module.exports = User
