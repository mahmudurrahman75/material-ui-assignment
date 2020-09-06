import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        fetch(url)
        .then(res => res.json())
        .then(data => setPosts(data));
    },[])
    return (
        <div>
            <h2  style = {{textAlign:"center"}}>Post Count: {posts.length}</h2>
            {
                posts.map(pd => <Post post = {pd}></Post>)
            }
        </div>
    );
};

export default Home;