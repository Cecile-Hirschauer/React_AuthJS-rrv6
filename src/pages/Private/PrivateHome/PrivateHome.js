import React from 'react';
import Cat from './Cat.gif';

const PrivateHome = () => {
    return (
        <div className="container p-5">
            <h1 className="display-3 Text-light mb-4">
                Home Sweet Private Home
            </h1>
            <img src={Cat} alt="Cat" />
        </div>
    )
}


export default PrivateHome;