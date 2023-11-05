import React, { useContext } from 'react';
import Cell from './Cell'; 
import { CountContext } from './CountProvider'; // Adjust the import path
import './Grid.css'
function Grid() {
    const [countState] = useContext(CountContext);

    return (
        <div>
            <div className='header' >Counter: {countState}</div>
            <div className='grid'>
                <Cell />
                <Cell />
                <Cell />
                <Cell />
            </div>
        </div>
    );
}

export default Grid;
