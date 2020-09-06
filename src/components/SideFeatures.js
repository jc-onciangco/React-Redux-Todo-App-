import React from 'react';
import FilterTodos from './FilterTodos';
import DeleteCompleteAll from './DeleteCompleteAll';


const SideFeatures = () => {
    return (
        <div className="side-features">
            <FilterTodos />
            <DeleteCompleteAll />
        </div>
    )
}

export default SideFeatures;