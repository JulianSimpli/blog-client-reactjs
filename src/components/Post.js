import React from 'react'

function Post({ post }) {
    const { title } = post;

    return (
        <li className="post">
            <div className="post-info">
                <p className="title">{ title }</p>
            </div>
            <div className="actions">
                <a href="/" className="btn btn-outline-secondary">
                    See details
                </a>
                <a href="/" className="btn btn-outline-secondary">
                    Edit post
                </a>
                <button type="button" className="btn btn-danger">
                    Delete post
                </button>
            </div>
        </li>
    );
}
 
export default Post;