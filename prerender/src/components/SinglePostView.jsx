var React = require('react')

var PostStore = require('../stores/PostStore')
var PostActions = require('../actions/PostActions')

module.exports = React.createClass({
  displayName: 'SinglePostView',

  getInitialState: function() {
    return PostStore.getState();
  },

  componentDidMount: function() {
    PostStore.listen(this.onChange);
    PostActions.loadSinglePost(this.props.params.id)
  },

  componentWillUnmount: function() {
    PostStore.unlisten(this.onChange);
  },

  onChange: function(state) {
    this.setState(state);
  },

  render: function() {
    if(this.state.currentPost){
      var imageBloc = ''
      var postClass = 'post post--noPicture'
      if(this.state.currentPost.author.photo){
        imageBloc = (
          <div className='post__img grid__col-12'>
            <div className='content' style={{backgroundImage: "url('"+this.state.currentPost.author.photo+"')" }}>
            </div>
          </div>
        )
        postClass = 'post'
      }
      return (
        <div className={`${postClass} grid grid--justify-center`}>
          { imageBloc }
          <div className="grid__col-10">
            <h2 className='post__metaData'>12 Juillet 2014 / 0 commentaires</h2>
            <h1 className="post__title">{this.state.currentPost.title}</h1>
            <div className="post__authorDetails">
              Posted by <a>
                {this.state.currentPost.author.name}
              </a>
            </div>
          </div>
          <div className='post__text grid__col-7'>
            Blah blah test essai de texte montrant une qualité extrêmenent intéressante
          </div>
        </div>
      )
    }
    else
        return <div>Chargement...</div>
  }
});
