import React, { useState } from 'react'

export default function Q8Input() {

        const [data,setData]=useState()

    return (
        <>
            {/* Create a form with an input field in React. Display the value of the input
        fielddynamically as the user types in it */}
        <h2> input field in React</h2>
            <form>
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" onChange={(e)=>setData(e.target.value)} value={data} placeholder="Enter your name" />
                <p id="demo">{data}</p>
            </form>

        </>
    )
}
