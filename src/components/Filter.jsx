import React from 'react';
import PropTypes from 'prop-types';

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

Filter.propTypes = {
    selectGroup: PropTypes.func.isRequired
}

export default Filter;