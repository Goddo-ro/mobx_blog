import React from 'react';
import {observer} from "mobx-react-lite";
import PostsStore from "../../store/PostsStore";
import "./PostsContainer.css";
import {Link} from "react-router-dom";

const PostsContainer = observer(() => {
    return (
        <div className="posts">
            {
                PostsStore.posts.map(post =>
                    <Link to={`/posts/${post.id}`} key={post.id} className="posts-item">
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                    </Link>
                )
            }
        </div>
    );
});

export default PostsContainer;