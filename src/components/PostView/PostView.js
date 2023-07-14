import React from 'react';

const PostView = ({post}) => {
    return (
        <div id="post">
            {
                post.id &&
                <div className="posts-item">
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                </div>
            }
        </div>
    );
};

export default PostView;