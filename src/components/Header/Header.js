import React, {useRef} from 'react';
import "./Header.css";
import AccessControl from "../../store/AccessControl";
import {Link} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {FaBars, FaTimes} from "react-icons/fa";

const Header = observer(() => {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive-nav");
    }

    const closeNavbar = (e) => {
        if (e.target.localName === "a")
            navRef.current.classList.toggle("responsive-nav");
    }

    return (
        <header>
            <div>
                <h1><span>React + MobX </span>Blog App</h1>
                <nav className="pages" ref={navRef} onClick={closeNavbar}>
                    {
                        AccessControl.isAuthenticated
                            ?
                            <>
                                <Link to="posts/add">New Post</Link>
                                <Link to="posts">Posts</Link>
                                <a className="exit-btn" onClick={() => AccessControl.exit()}>Exit</a>
                            </>
                            : <>
                                <Link to="/login">Login</Link>
                            </>
                    }
                    <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                        <FaTimes/>
                    </button>
                </nav>
                <button className="nav-btn" onClick={showNavbar}>
                    <FaBars/>
                </button>
            </div>
        </header>
    );
});

export default Header;