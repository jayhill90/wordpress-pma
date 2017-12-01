import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

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

  render(){
    return(
      <div>
        {this.state.post.map((post, i) => (
        <div key={post.id}>
        <div>Post ID: {post.id} </div>
        <div><h3>{post.title.rendered}</h3></div>
        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </div>
        ))}
      </div>
    );
  }
}

export default Posts;
