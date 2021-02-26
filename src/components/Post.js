import React from 'react';
import { Link } from 'react-router-dom';

function Post({ post }) {
    const { id, title } = post;

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
                <button type="button" className="btn btn-danger">
                    Delete post
                </button>
            </div>
        </li>
    );
}
 
export default Post;