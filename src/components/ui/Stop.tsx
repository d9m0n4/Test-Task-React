import React from 'react';

const Stop = ({isActive}: {isActive: boolean}) => {
    return (
        <svg className='button__icon' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="20" height="20" fill={isActive ? '#fff' : '#9E9E9E'}/>
        </svg>
);
};

export default Stop;