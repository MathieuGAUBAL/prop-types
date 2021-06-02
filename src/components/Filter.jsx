import React from 'react';

const Filter = ({ selectGroup }) => {

    return (
        <>
            <select onChange={(event) => selectGroup(event.target.value)}>
                <option value="JOY">JOY</option>
                <option value="NARY">NARY</option>
                <option value="INR">INR</option>
                <option value="REGION-SUD">REGION-SUD</option>
            </select>
        </>
    )
}


export default Filter;