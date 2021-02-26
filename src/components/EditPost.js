import React, { Fragment, useState, useEffect } from 'react';
import swal from 'sweetalert'; 

import postAxios from '../config/axios';

function EditPost(props) {
    const { id } = props.match.params;
    const [post, postData] = useState({
        title: '',
        body: ''
    });

    const apiQuery = async () => {
        const postQuery = await postAxios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);

        postData(postQuery.data);
    }

    useEffect(() => {
        apiQuery();
    });
    
    const updateState = e => {
        postData({
            ...post,
            [e.target.name]: e.target.value,
        });
    };

    const postUpdate = e => {
        e.preventDefault();

        postAxios.put(`https://jsonplaceholder.typicode.com/posts/${ post.id }`, post)
            .then(res => {
                swal({
                    title: "Post updated!",
                    icon: "success",
                    button: "Aww yiss!",
                });
                props.history.push('/');
            })
            .catch(err => {
                swal({
                    title: "Error 404!",
                    icon: "error",
                    button: "Aww yiss!",
                });
            });
    }

    const postValidation = () => {
        const { title, body } = post;

        return !title.length || !body.length;
    }

    return (
        <Fragment>
            <h1>Edit post</h1>
            <form
                onSubmit={ postUpdate }
            >
                <legend>Complete all fields</legend>

                <div className="field">
                    <label>Title:</label>
                    <input type="text" placeholder="Post Title" name="title" onChange={ updateState } value={ post.title } />
                </div>

                <div className="field">
                    <label>Body:</label>
                    <textarea rows="5" cols="500" type="text" placeholder="Post body" name="body" onChange={ updateState } value={ post.body } />
                </div>

                <div className="send">
                        <input type="submit" className="btn btn-primary" value="Save changes" disabled={ postValidation() } />
                </div>

            </form>
        </Fragment>
    );
}
 
export default EditPost;