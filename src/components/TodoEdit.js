import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

const getFocus = (e) => {
    e.target.focus();
}

const TodoEdit = ({id}) => {
    const todo = useSelector(state => state.todos.find(todo => todo.id === id));
    const dispatch = useDispatch();
    const [editValue, setEditValue] = useState(todo.content);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false)

    return (
        <form   className="todo-edit"
                style={{display: todo.isEditing? 'block':'none'}}
                onSubmit={e => {
                    e.preventDefault();
                    setIsFormSubmitted(true);
                    dispatch({type: 'UPDATE_TODO', id: id, updatedContent: editValue});
                }}>
            <input  type="text"
                    value={editValue}
                    onChange={e => {setEditValue(e.target.value)}}
                    onMouseOver={getFocus}
                    onBlur={() => {isFormSubmitted? setIsFormSubmitted(false) : dispatch({type: 'SHOW_EDIT', id: id})}}/>
        </form>
    )
}

export default TodoEdit;