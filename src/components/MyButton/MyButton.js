import React from 'react';
import "./MyButton.css";

const MyButton = (props) => {
    return (
        <button {...props}>{props.text}</button>
    );
};

export default MyButton;