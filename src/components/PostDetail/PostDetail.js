import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Image from '../Image/Image';
import './PostDetail.css';

const PostDetail = () => {
    const {pId} = useParams();

    const [post, setPost] = useState({});

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${pId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data))
    },[])

    const {userId,id,title,body} = post;
    

    const [comment, setComment] = useState([]);

    useEffect(()=>{
        const url= `https://jsonplaceholder.typicode.com/comments?postId=${pId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setComment(data))
    },[])

    const {postId} = comment;

    return (
        <div style={{margin:'40px'}}>
            <h2 style={{textAlign:'center'}}>This Is Post Detail</h2>
            <h3>Post Id: {userId}</h3>
            <h3>ID Number: {id}</h3>
            <h3 style={{color:'green'}}>Title: {title}</h3>
            <p style={{fontSize: '20px'}}>Body: {body}</p>

            <div className="comment-section">

                <h2 style={{textAlign:"center"}}>The Comment Section</h2>
                <div className="img">
                    <Image></Image>
                </div>
                <div>
                    {
                    comment.map(pd => 
                        <div className="comment-body">
                            <h3>Name: {pd.name} </h3>
                            <h4>Email:{pd.email}</h4> 
                            <p className="comment">Comment: {pd.body}</p>
                        </div>)
                    }
                </div>
            </div>
            
        </div>
    );
};

export default PostDetail;