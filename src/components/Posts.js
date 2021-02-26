import React, { Fragment, useEffect, useState } from 'react';

import Post from './Post';
import postAxios from '../config/axios';

const Posts = () => {

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
            <ul>
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