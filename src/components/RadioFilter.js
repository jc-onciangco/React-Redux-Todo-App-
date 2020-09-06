import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

const RadioFilter = ({filterName}) => {
    const filter = useSelector(state => state.todosFilter);
    const dispatch = useDispatch();

    return (
        <div className="form-field">
            <input  type="radio" 
                    name="todos"
                    className={`${filterName} radio-button`}
                    id={filterName} 
                    value={filterName}
                    checked={filterName===filter? true:false}
                    onChange={() => {dispatch({type: 'CHANGE_FILTER', filter: filterName})}}/>
            <label for={filterName} className="radio-label">
                {filterName}
            </label>
        </div>
    )
}

export default RadioFilter;