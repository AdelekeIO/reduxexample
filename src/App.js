import React from 'react';
import './App.css';
import Post from './component/Post'
import PostForm from './component/PostForm'

// const store = createStore(()=>[],{},applyMiddleware)
function App() {
  return (
    <div className="App">
      <PostForm/>
      <hr/>

      <Post/>
    </div>
  );
}

export default App;
