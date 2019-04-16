import React from 'react';
import AppHeader from '../AppHeader';
import SearchPanel from '../SearchPanel';
import TodoList from '../TodoList';
import ItemStatusFilter from '../ItemStatusFilter';
import './style.css';

const App = () => {
    const todoData = [
        {
            label : 'Drink Coffee',
            important: false,
            id: 1,
        },
        {
            label : 'Make food',
            important: true,
            id: 2,
        },
        {
            label : 'Clean table',
            important: false,
            id: 3,
        }
    ];

    return (
        <div className={'app'}>
            <AppHeader />
            <div className="top-panel d-flex">
                <SearchPanel/>
                <ItemStatusFilter/>
            </div>
            <TodoList todos={todoData} />
        </div>
    )
};

export default App;