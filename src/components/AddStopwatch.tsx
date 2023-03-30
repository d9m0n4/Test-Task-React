import React, {FC} from 'react';
interface IAddStopWatch {
    onAdd?: React.Dispatch<any>
}

const AddStopwatch: FC<IAddStopWatch> = ({onAdd}) => {
    return (
        <button className="button add__stopwatch-btn" onClick={onAdd}>
            +
        </button>
    );
};

export default AddStopwatch;