import {createBrowserRouter} from "react-router-dom";
import Login from "../pages/Login";
import Posts from "../pages/Posts";
import NewPost from "../pages/NewPost";
import Post from "../pages/Post";
import App from "../App";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "login",
                element: <Login/>,
            },
            {
                path: "posts",
                element: <Posts/>,
            },
            {
                path: "/posts/add",
                element: <NewPost/>
            },
            {
                path: "/posts/:id",
                element: <Post/>
            },
        ]
    },
]);