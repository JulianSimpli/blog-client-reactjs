import React from 'react'

const Post = ({ post }) => {
    const { title } = post;

    return (
        <li className="post">
            <div className="post-info">
                <p className="title">{ title }</p>
            </div>
            <div className="actions">
                <a href="/" className="btn">
                    See details
                </a>
                <a href="/" className="btn">
                    Edit post
                </a>
                <button type="button" className="btn">
                    Delete post
                </button>
            </div>
        </li>
    );
}
 
export default Post;