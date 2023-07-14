import React from 'react';
import MyInput from "../MyInput/MyInput";
import "./PostForm.css";
import MyButton from "../MyButton/MyButton";

const PostForm = (props) => {
    return (
        <form onSubmit={props.submitFunction} className="single-form post-form">
            <label>
                <span>Title</span>
                <MyInput id="title" value={props.title}
                         onChange={(e) => props.setTitle(e.target.value)}
                />
            </label>
            <label>
                <span>Content</span>
                <textarea className="my-input" value={props.content}
                          onChange={(e) => props.setContent(e.target.value)}
                >
                </textarea>
            </label>
            <MyButton text="Save"></MyButton>
        </form>
    );
};

export default PostForm;