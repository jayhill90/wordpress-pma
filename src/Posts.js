import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class Posts extends Component {

  constructor(props){
    super(props);

    this.state = {
      post: [],
    };
  }

componentDidMount() {
  const url = "https://defc0re.wpengine.com/wp-json/wp/v2/posts/"
  fetch(url)
  .then(results => {
    return results.json();
  }).then(data => {
      const post = data.map(post => post)
      console.log(post)
      this.setState({
        post: post,
      })
  });
}

buildLink(slug, title) {
    console.log(title);
    return `blog/${slug}`;
  }

  render(){
    return(
      <div>
        {this.state.post.map((post, i) => (
        <div key={post.id}>
        <div>Post ID: {post.id} </div>
        <div><h3><Link to={`${this.buildLink(post.slug, post.id)}`}>{post.title.rendered}</Link></h3></div>
        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </div>
        ))}
      </div>
    );
  }
}

export default Posts;
