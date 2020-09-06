const initState = {
    todos: [
        {
            id: 0,
            content: "Do some funny stuff share to others to make them happy.",
            isCompleted: false,
            isEditing: false
        },
        {
            id: 1,
            content: "Cook lunchmeal.",
            isCompleted: false,
            isEditing: false
        },
        {
            id: 2,
            content: "Learn new skill and improve it.",
            isCompleted: false,
            isEditing: false
        }
    ],
    todosFilter: 'all',
}

const rootReducer = (state=initState, action={}) => {
    let todos = state.todos;
    let newTodos;
    switch(action.type) {
        case 'SHOW_EDIT':
            todos.forEach(todo => {
                if(todo.id === action.id) {
                    todo.isEditing = !todo.isEditing
                }
            })
            console.log(todos)
            return {
                ...state,
                todos: [...todos]
            }
        case 'UPDATE_TODO':
            todos.forEach(todo => {
                if(todo.id === action.id) {
                    todo.content = action.updatedContent
                    todo.isEditing = !todo.isEditing
                }
            })
            return {
                ...state,
                todos: [...todos]
            }
        case 'ADD_TODO':
            return {
                ...state,
                todos: [
                    ...todos,
                    {
                        id: Math.random(),
                        content: action.content,
                        isEditing: false,
                        isCompleted: false
                    }
                ]
            }
        case 'DELETE_TODO':
            newTodos = todos.filter(todo => todo.id !== action.id);
            return {
                ...state,
                todos: [...newTodos]
            }
        case 'COMPLETE':
            todos.forEach(todo => {
                if(todo.id === action.id) {
                    todo.isCompleted = !todo.isCompleted
                }
            })
            console.log(todos)
            return {
                ...state,
                todos: [...todos]
            }
        case 'CHANGE_FILTER':
            return {
                ...state,
                todosFilter: action.filter
            }
        case 'COMPLETE_ALL_UNFINISHED':
            todos.forEach(todo => {
                if(!todo.isCompleted){
                    todo.isCompleted = !todo.isCompleted;
                    return
                }
            })
            return {
                ...state,
                todos: [...todos]
            }
        case 'DELETE_COMPLETED':
            newTodos = todos.filter(todo => !todo.isCompleted);
            return {
                ...state,
                todos: [...newTodos]
            }
        case 'DELETE_ALL':
            return {
                ...state,
                todos: []
            }
        case 'RESET_TODOS':
            todos.forEach(todo => {
                if(todo.isCompleted){
                    todo.isCompleted = !todo.isCompleted;
                }
            })
            return {
                ...state,
                todos: [...todos]
            }                  
        default:
            return state   
    }
} 

export default rootReducer;