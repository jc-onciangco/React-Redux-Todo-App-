import React from 'react';
import TodoContent from './TodoContent';
import TodoEdit from './TodoEdit';
import FinishTodo from './FinishTodo';
import {useSelector, useDispatch} from 'react-redux';

const TodoBody = () => {
    const filter = useSelector(state => state.todosFilter);
    const todos = useSelector(state => {
        switch(filter) {
            case 'completed':
                return state.todos.filter(todo => todo.isCompleted===true);
            case 'uncompleted':
                return state.todos.filter(todo => todo.isCompleted===false);
            default:
                return state.todos
        }
    });
    const dispatch = useDispatch();

    return (
        <div className="todo-body">
            <ul className="todos">
                {
                    todos.map(todo => {
                        return (
                            <li className="todo" key={todo.id}>
                                <div>
                                    <FinishTodo id={todo.id}/>
                                </div>
                                <div className="todo-content" >
                                    <TodoContent id={todo.id}/>
                                    <TodoEdit id={todo.id}/>
                                </div>
                                <div    className="delete-wrapper"
                                        onClick={() => {dispatch({type: 'DELETE_TODO', id: todo.id})}}>
                                    <span>DELETE</span>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default TodoBody;