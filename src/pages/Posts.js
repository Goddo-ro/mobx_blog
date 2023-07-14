import React from 'react';
import AccessControl from "../store/AccessControl";
import {Navigate} from "react-router-dom";
import PostsContainer from "../components/PostsContainer/PostsContainer";
import {observer} from "mobx-react-lite";

const Posts = observer(() => {
    if (!AccessControl.isAuthenticated)
        return <Navigate replace to="/login"/>

    return (
        <PostsContainer/>
    );
});

export default Posts;