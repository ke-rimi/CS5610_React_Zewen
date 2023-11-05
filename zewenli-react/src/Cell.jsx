import React, { useContext, useState } from "react";

import './Cell.css';
import { CountContext } from "./CountProvider";

export default function App() {
    const [blackOutState, setBlackOutState] = useState(false);
    const [countState, setCountState] = useContext(CountContext);

    function reverse() {
        setBlackOutState(!blackOutState);
        setCountState(currentCount => blackOutState ? currentCount - 1 : currentCount + 1);
    }

    let boxClassName = blackOutState ? 'box boxBlack' : 'box';

    return (
        <div>
            <div className={boxClassName} onClick={reverse}></div>
        </div>
    );
}
