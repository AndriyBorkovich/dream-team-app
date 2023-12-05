import React from 'react';

const MyCard = ({ name, additionalInfo ,photo}) => {
    return (
        <div className="card">
            <div className="card-header">
                <h2>{name}</h2>
            </div>
            <div className="card-body">
                <p>{additionalInfo}</p>
            </div>
            <div >
                <img className="card-photo" src={photo} alt="" />
            </div>
        </div>
    );
};

export default MyCard;