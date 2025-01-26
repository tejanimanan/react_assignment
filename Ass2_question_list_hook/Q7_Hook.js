import React, { useState } from 'react'

export default function Q7_Hook() {
    const [count,setCount] = useState(1)
    return (
        <div>
            Q7_Hook
            <p>
                Create a functional component with a counter using the useState()hook. Include
                buttons to increment and decrement the counter.
            </p>

            <button  className='btn btn-info' onClick={()=>setCount(count-1)}>-</button>
                <p className='p-3 fw-bold'>{count}</p>
            <button className='btn btn-info' onClick={()=>setCount(count+1)}>+</button>

        </div>
    )
}
