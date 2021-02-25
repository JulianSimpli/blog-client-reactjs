import React from 'react'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-darkp-3 mb-2 bg-light">
            <div className="container">
                <div className="navbar-nav">
                    <a className="nav-link text-dark" href="/">Home</a>
                    <a className="nav-link text-dark" href="/">Edit Post</a>
                </div>
            </div>
        </nav>
    );
}
 
export default Header;