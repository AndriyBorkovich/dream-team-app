import React from "react";
import IlliaPhoto from './images/illia-anime.jpg'
 export function MainContent() {
    return (
        <div>
        <h1>My dream team</h1>
        <div className="illia-block">
            <p className="name illiaN">Illia Dudchyk</p>
            <div><p className="position illiaP">👨‍💻Developer</p></div>
            <img className="illia-photo" src = {IlliaPhoto}></img>
        </div>
        </div>
    )
    
}
