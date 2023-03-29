import React from 'react';

const Play = ({isActive}: {isActive: boolean}) => {
    return (
        <svg className='button__icon' width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 20V0L17 10L0 20Z" fill={isActive ? '#fff' : '#9E9E9E'}/>
        </svg>
    );
};

export default Play;