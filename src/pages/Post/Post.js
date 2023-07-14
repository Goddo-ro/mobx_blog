import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import PostsStore from "../../store/PostsStore";
import {observer} from "mobx-react-lite";
import "./Post.css";
import PostView from "../../components/PostView/PostView";

const Post = observer(() => {
    const [post, setPost] = useState({});
    const [view, setView] = useState(true);

    const params = useParams();

    useEffect(() => {
        setPost(PostsStore.getPost(params.id));
    }, [params.id]);

    return (
        <>
            {
                view
                ? <PostView post={post}/>
                    : <></>
            }
        </>
    );
});

export default Post;