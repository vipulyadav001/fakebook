import React from 'react';
import './App.css';

function App() {
  return (
    <div className="feed-container">
      <div className="create-post">
        <input type="text" placeholder="What's on your mind?" className="post-input" />
        <button className="post-button">Post</button>
      </div>
      <div className="posts">
        {[
          {
            id: 1,
            author: "John Doe",
            content: "Having a great day! 🌞",
            likes: 15,
            comments: 3
          },
          {
            id: 2,
            author: "Jane Smith",
            content: "Check out my new project!",
            likes: 24,
            comments: 5
          }
        ].map((post) => (
          <div key={post.id} className="post">
            <div className="post-header">
              <img 
                src={`https://via.placeholder.com/40`} 
                alt={post.author} 
                className="profile-pic"
              />
              <h3>{post.author}</h3>
            </div>
            <p className="post-content">{post.content}</p>
            <div className="post-actions">
              <button>Like ({post.likes})</button>
              <button>Comment ({post.comments})</button>
              <button>Share</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
