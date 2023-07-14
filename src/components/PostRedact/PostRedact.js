import React, {useState} from 'react';
import PostForm from "../PostForm/PostForm";

const PostRedact = ({post, setView}) => {
    const [title, setTitle] = useState(post.title);
    const [content, setContent] = useState(post.content);

    const update = (e) => {
        e.preventDefault();

        console.log(title, content)
    }

    return (
        <PostForm submitFunction={update} title={title} setTitle={setTitle}
                  content={content} setContent={setContent}
        />
    );
};

export default PostRedact;