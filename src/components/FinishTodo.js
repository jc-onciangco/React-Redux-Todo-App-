import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

const FinishTodo = ({id}) => {
    const todo = useSelector(state => state.todos.find(todo => todo.id === id));
    const dispatch = useDispatch();

    return (
        <div className="finish-todo">
            <input  type="checkbox"
                    checked={todo.isCompleted? true : false}
                    onChange={() => {dispatch({type: 'COMPLETE', id: id})}}/>
        </div>
    )
}

export default FinishTodo;