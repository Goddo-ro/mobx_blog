import React, {useState} from 'react';
import PostForm from "../PostForm/PostForm";
import {observer} from "mobx-react-lite";
import PostsStore from "../../store/PostsStore";

const PostRedact = observer(({post, setView}) => {
    const [title, setTitle] = useState(post.title);
    const [content, setContent] = useState(post.content);

    const update = (e) => {
        e.preventDefault();

        PostsStore.updatePost(post.id, title, content);
        setView(true);
    }

    return (
        <PostForm submitFunction={update} title={title} setTitle={setTitle}
                  content={content} setContent={setContent}
        />
    );
});

export default PostRedact;