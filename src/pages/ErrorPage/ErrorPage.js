import React from 'react';
import "./ErrorPage.css";

const ErrorPage = () => {
    return (
        <div className="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occured.</p>
            <span>Not Found</span>
        </div>
    );
};

export default ErrorPage;