import React from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert'; 

import postAxios from '../config/axios';

function Post({ post }) {
    const { id, title, body } = post;

    const deletePost = id => {
        swal({
            title: "Are you sure?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                postAxios.delete(`https://jsonplaceholder.typicode.com/posts/${ id }`)
                    .then(res => console.log(res));
              swal("Post has been deleted!", {
                icon: "success",
              });
            }
          });
    };

    return (
        <li className="post">
            <div className="post-info">
                <p className="title">{ title }</p>
            </div>
            <div className="actions">
                <a href="/" className="btn btn-outline-secondary">
                    See details
                </a>
                <Link to={ `/posts/edit/${id}` } className="btn btn-outline-secondary">
                    Edit post
                </Link>
                <button type="button" className="btn btn-danger" onClick={ () => deletePost(id) }>
                    Delete post
                </button>
            </div>
        </li>
    );
}
 
export default Post;