import React from 'react';

const Play = ({isActive}: {isActive: boolean}) => {
    return (
        <svg className='button__icon' width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="7" width="3" height="20" fill={isActive ? '#fff' : '#9E9E9E'}/>
            <rect width="3" height="20" fill={isActive ? '#fff' : '#9E9E9E'}/>
        </svg>
);
};

export default Play;