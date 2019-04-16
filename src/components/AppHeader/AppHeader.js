import React from 'react';
import './style.css';

const AppHeader = ({todo, done}) => {
    return (
        <div className="app-header d-flex">
            <h1>Todo app</h1>
            <p>12 more to dom 12 done</p>
        </div>
    );

};

export default AppHeader;