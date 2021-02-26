import React, { Fragment, useState } from 'react';
import { withRouter } from 'react-router-dom';
import swal from 'sweetalert'; 

import postAxios from '../config/axios';

function NewPost({ history }) {
    const [post, savePost] = useState({
        title: '',
        content: ''
    });

    const addNewPost = e => {
        e.preventDefault();

        postAxios.post('https://jsonplaceholder.typicode.com/posts', post)
            .then(res => {
                swal({
                    title: "Post added!",
                    icon: "success",
                    button: "Aww yiss!",
                  });
                  history.push('/');
            })
            .catch(err => {
                swal({
                    title: "Error 404!",
                    icon: "error",
                    button: "Aww yiss!",
                  });
            });
    }

    const updateState = e => {
        savePost({
            ...post,
            [e.target.name]: e.target.value,
        });
    };

    const postValidation = () => {
        const { title, content } = post;

        return !title.length || !content.length;
    }

    return (
        <Fragment>
            <h1>New post</h1>
            <form onSubmit={ addNewPost }>
                <legend>Complete all fields</legend>

                <div className="field">
                    <label>Title:</label>
                    <input type="text" placeholder="Post Title" name="title" onChange={ updateState } />
                </div>

                <div className="field">
                    <label>Content:</label>
                    <input type="text" placeholder="Post Content" name="content" onChange={ updateState } />
                </div>

                <div className="send">
                        <input type="submit" className="btn btn-primary" value="Add Post" disabled={ postValidation() } />
                </div>

            </form>
        </Fragment>
    );
}
 
export default withRouter(NewPost);