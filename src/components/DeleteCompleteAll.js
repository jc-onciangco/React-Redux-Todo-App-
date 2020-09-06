import React from 'react';
import DeleteButton from './DeleteButton';

const DeleteCompleteAll = () => {
    return (
        <div className="delete-complete-all">
             <DeleteButton buttonFunction={{buttonName: 'Reset Todos', class: 'reset-todos', actionType: 'RESET_TODOS'}}/>
            <DeleteButton buttonFunction={{buttonName: 'Complete All Unfinished', class: 'finished-all-uncomplete', actionType: 'COMPLETE_ALL_UNFINISHED'}}/>
            <div className="delete-all">
                <DeleteButton buttonFunction={{buttonName: 'Delete Completed', class: 'delete-completed', actionType: 'DELETE_COMPLETED'}}/>
                <DeleteButton buttonFunction={{buttonName: 'Delete All', class: 'delete-all-todo', actionType: 'DELETE_ALL'}}/>
            </div>
        </div>
    )
}

export default DeleteCompleteAll;