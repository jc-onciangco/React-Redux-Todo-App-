import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

const TodoContent = ({id}) => {
    const todo = useSelector(state => state.todos.find(todo => todo.id === id));
    const dispatch = useDispatch();

    return (
        <div className="content" style={{display: todo.isEditing? 'none':'flex'}}>
            <p  style={{textDecoration: todo.isCompleted? 'line-through' : 'none'}} 
                onDoubleClick={() => {dispatch({type: 'SHOW_EDIT', id: id})}}>{todo.content}</p>
        </div>
    )
}

export default TodoContent;