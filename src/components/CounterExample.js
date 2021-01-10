import React, { useState } from 'react';

function CounterExample(){
    const [count, setCount] = useState(0);
    // console.log(useState(0));
    return (
        <div>
            <h1>{count}</h1>
            <h1 onClick={() => setCount(count + 1)}>plus</h1>
            {/* minus todo by basant */}
        </div>
    )
}

export default CounterExample