import React from 'react';

const Todos = ({ todos, deleteMethod }) => {
    const todoList =  todos.length ? (
        todos.map(todo => {
            return (
                <div className="collection-item" key={ todo.id }>
                    <span onClick={ () => { deleteMethod(todo.id) } }>{ todo.content }</span>
                </div>
            )
        }) 
    ) : (
        <p className="center">You have no items on your TODO list!</p>
    );

    return (
        <div className="todos collection">
            { todoList }
        </div>
    );
}

export default Todos;