import React from 'react';
import "./Header.css";
import AccessControl from "../../store/AccessControl";
import {Link} from "react-router-dom";
import {observer} from "mobx-react-lite";

const Header = observer(() => {
    return (
        <header>
            <h1>React + MobX Blog App</h1>
            {
                AccessControl.isAuthenticated
                ? <div>
                    <p>{AccessControl.username}</p>
                    <a className="exit-btn" onClick={() => AccessControl.exit()}>Exit</a>
                  </div>
                : <div>
                    <Link to="/login">Login</Link>
                  </div>
            }
        </header>
    );
});

export default Header;