import React from 'react'

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-darkp-3 mb-2 bg-light">
            <div className="container">
                <div className="navbar-nav">
                    <a className="nav-link text-dark" href="/">Home</a>
                    <a className="nav-link text-dark" href="/">Edit Post</a>
                </div>
                <a className="btn btn-success">New Post</a>
            </div>
        </nav>
    );
}
 
export default Header;