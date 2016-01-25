var React = require('react')
var Link = require('react-router').Link

var PostActions = require('../actions/PostActions')

module.exports = React.createClass({
  displayName: 'PostPreview',
  render: function() {
    var imageBloc = ''
    var postClass = 'post post--noPicture'
    if(this.props.post.author.photo){
      imageBloc = (
        <Link to={'/post/'+this.props.post.id+'/'+this.props.post.slug} className='post__img grid__col-12'>
          <div className='content' style={{backgroundImage: "url('"+this.props.post.author.photo+"')" }}>
          </div>
        </Link>
      )
      postClass = 'post'
    }
    return (
      <div className={`${postClass} grid grid--justify-center`}>
        { imageBloc }
        <div className="grid__col-10">
          <h2 className='post__metaData'>12 Juillet 2014 / 0 commentaires</h2>
          <h1 className="post__title">
            <Link to={'/post/'+this.props.post.id+'/'+this.props.post.slug}>{this.props.post.title}</Link>
          </h1>
          <div className="post__authorDetails">
            Posted by <a>
              {this.props.post.author.name}
            </a>
          </div>
        </div>
        <div className='post__text grid__col-7'>
          Blah blah test essai de texte montrant une qualité extrêmenent intéressante
        </div>
      </div>
    )
  }
});
