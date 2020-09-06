import React from 'react';
import {useDispatch} from 'react-redux';

const DeleteButton = ({buttonFunction}) => {
    const dispatch = useDispatch();

    return (
        <div    className={`${buttonFunction.class} delete-button`}
                onClick={() => {dispatch({type: buttonFunction.actionType})}}>
            {buttonFunction.buttonName}
        </div>
    )
}

export default DeleteButton;

