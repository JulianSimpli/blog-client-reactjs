import React, { useEffect } from 'react';

import postAxios from '../config/axios';

const Posts = () => {

    const apiRequest = async () => {
        const posts = await postAxios.get('/posts');

        console.log(posts);
    }

    useEffect(() => {
        apiRequest();
    });

    return (
        <h1>Since Posts.js</h1>
    );
}
 
export default Posts;