import React from 'react';



const MyCard = ({ name, additionalInfo, imageUrl }) => {

    return (
        <div className="card">
            <div className="card-header">
                <h2>{name}</h2>
            </div>
            <div className="card-body">
                <img src={imageUrl} alt={`${name}'s avatar`} className="avatar" />
                <p>{additionalInfo}</p>
            </div>
        </div>
    );
};

export default MyCard;