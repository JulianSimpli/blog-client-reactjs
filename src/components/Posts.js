import React, { Fragment, useEffect, useState } from 'react';

import Post from './Post';
import postAxios from '../config/axios';

function Posts() {

    const [posts, savePosts] = useState([]);

    const apiQuery = async () => {
        const postsQuery = await postAxios.get('/posts');

        savePosts(postsQuery.data);
    }

    useEffect(() => {
        apiQuery();
    });

    return (
        <Fragment>
            <h1>Posts</h1>

            <ul className="posts-list">
                { posts.map(post => (
                    <Post 
                        key={ post.id }
                        post={ post }
                    />
                )) }
            </ul>
        </Fragment>
    );
}
 
export default Posts;