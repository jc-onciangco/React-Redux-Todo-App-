import React from 'react';
import RadioFilter from './RadioFilter';

const FilterTodos = () => {
    return (
        <form className="filter-todos">
            <RadioFilter filterName={'all'}/>
            <RadioFilter filterName={'completed'}/>
            <RadioFilter filterName={'uncompleted'}/>
        </form>
    )
}

export default FilterTodos;