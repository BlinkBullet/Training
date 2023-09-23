import React from 'react';


const button = ({ onClick }) => {
    return (
        <div className='btn btn-dark' onClick={onClick}>button</div>
    )
}

export default button