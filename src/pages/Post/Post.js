import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import PostsStore from "../../store/PostsStore";
import {observer} from "mobx-react-lite";
import "./Post.css";
import PostView from "../../components/PostView/PostView";
import PostRedact from "../../components/PostRedact/PostRedact";

const Post = observer(() => {
    const [post, setPost] = useState({});
    const [view, setView] = useState(true);

    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        setPost(PostsStore.getPost(params.id));
    }, [params.id]);

    const deletePost = () => {
        PostsStore.deletePost(params.id);
        navigate("/posts");
    }

    return (
        <div className="post-container">
            {
                view
                ? <PostView post={post}/>
                : <PostRedact post={post} setView={setView}/>
            }
            <div className="post-footer">
                <button onClick={() => setView(old => !old)}>
                    {
                        view ? "Redact" : "View"
                    }
                </button>
                <button className="delete-btn" onClick={deletePost}>
                    Delete
                </button>
            </div>
        </div>
    );
});

export default Post;