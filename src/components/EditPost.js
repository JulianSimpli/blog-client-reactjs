import React, { Fragment, useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
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
        console.log(postQuery);
        postData(postQuery.data);

    }

    useEffect(() => {
        apiQuery();
    }, []);
    
    const updateState = e => {
        postData({
            ...post,
            [e.target.name]: e.target.value,
        });
    };

    const postValidation = () => {
        const { title, body } = post;
        console.log(title, body);

        return !title.length || !body.length;
    }

    return (
        <Fragment>
            <h1>Edit post</h1>
            <form>
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