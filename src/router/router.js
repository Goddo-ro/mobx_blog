import Login from "../pages/Login";
import Posts from "../pages/Posts";
import NewPost from "../pages/NewPost";
import Post from "../pages/Post";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import { Navigate } from "react-router-dom";

export const routes = [
    { path: "/login", element: <Login/> },
    { path: "/", element: <Navigate replace to="login"/>},
    { path: "*", element: <ErrorPage/> },
];

export const privateRoutes = [
    { path: "/posts", element: <Posts/> },
    { path: "/posts/add", element: <NewPost/> },
    { path: "/posts/:id", element: <Post/> },
    { path: "/login", element: <Navigate replace to="/posts"/> },
    { path: "/", element: <Navigate replace to="/posts"/> },
    { path: "*", element: <ErrorPage/> },
]