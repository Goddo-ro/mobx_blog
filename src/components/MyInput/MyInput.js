import React from 'react';
import "./MyInput.css";

const MyInput = (props) => {
    return (
        <input className="my-input" {...props}/>
    );
};

export default MyInput;