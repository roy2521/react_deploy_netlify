import {useState, useContext} from 'react';
import DataContext from '../context/DataContext';
import { useHistory } from "react-router-dom";
import api from '../api/posts';
import {format} from 'date-fns';

const NewPost = () => {

  const { posts, setPosts } = useContext(DataContext);
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const dateTime = format(new Date(), 'MMMM dd, yyyy pp');
    const newPost = {id, title: postTitle, datetime:dateTime, body: postBody};
   try {
       const response = await api.post('/posts', newPost);
       const allPost = [...posts, response.data];
       setPosts(allPost);
       setPostTitle('');
       setPostBody('');
       history.push('/');                
   } catch (err) {
       console.log(`Error: ${err.message}`);
   }
 }



  return (

    <main className="NewPost">
      <h2>New Post</h2>
      <form className="newPostForm" onSubmit={handleSubmit}>

          <label htmlFor="postTitle">Title:</label>
          <input 
            id="postTitle"
            type="text"
            required
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
          />

          <label htmlFor="postBody">Post:</label>
          <textarea
            id="postBody"
            required
            value={postBody}
            onChange={(e) => setPostBody(e.target.value)}
          />
          <button type="submit">Submit</button>  
      </form>
    </main>
  )
}

export default NewPost
