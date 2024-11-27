// Import the apiUtil.js module with the exported functions.
import {fetchPosts} from './apiUtil.js'


// Display only the first 5 post title and body. Function is not complete, fill in the blanks.
async function displayPosts() {
    const posts = await fetchPosts()

    
    posts.slice(0, 5).forEach((post) => {
      console.log(`Title: ${post.title}`);
      console.log(`Body: ${post.body}`);
    });
  }
   
  displayPosts();

