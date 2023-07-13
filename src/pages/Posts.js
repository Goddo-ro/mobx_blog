import React from 'react';
import AccessControl from "../store/AccessControl";
import {Navigate} from "react-router-dom";

const Posts = () => {
    if (!AccessControl.isAuthenticated)
        return <Navigate replace to="/login"/>

    return (
        <div>
           Posts
        </div>
    );
};

export default Posts;