import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import PostsStore from "../../store/PostsStore";
import {observer} from "mobx-react-lite";
import "./Post.css";
import PostView from "../../components/PostView/PostView";

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
        <div>
            {
                view
                ? <PostView post={post}/>
                    : <>Redact</>
            }
            <div className="post-footer">
                <button>
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