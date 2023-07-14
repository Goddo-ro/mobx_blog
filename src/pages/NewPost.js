import React, {useState} from 'react';
import PostForm from "../components/PostForm/PostForm";
import {observer} from "mobx-react-lite";
import PostsStore from "../store/PostsStore";
import {useNavigate} from "react-router-dom";

const NewPost = observer(() => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const navigate = useNavigate();

    const addFunction = (e) => {
        e.preventDefault();

        PostsStore.addPost({
            id: Date.now(),
            title: title,
            content: content,
        })

        navigate("/posts");
    }

    return (
        <PostForm title={title} setTitle={setTitle} content={content} setContent={setContent}
                  submitFunction={addFunction}
        />
    );
});

export default NewPost;