import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

const AddTodo = () => {
    const dispatch = useDispatch();
    const [addTodo, setAddTodo] = useState('');

    return (
        <form   className="add-todo"
                onSubmit={e => {
                    e.preventDefault();
                    dispatch({type: 'ADD_TODO', content: addTodo});
                    setAddTodo('');
                }}>
            <input  type="text"
                    placeholder="Put todo here..."
                    value={addTodo}
                    onChange={e => {setAddTodo(e.target.value)}}/>
        </form>
    )
}

export default AddTodo;