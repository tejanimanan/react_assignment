import React from 'react'
const fruit = [
    { id: 1, name: "apple1" },
    { id: 2, name: "mongo" },
    { id: 3, name: "banana" }
]
export default function Q3() {
    return (
        <div>
            <p className='fs-2'>Create a React component that renders a list of items (e.g., a list of fruit names).
                Usethe map()function to render each item in the list</p>
            <ul className='text-start'>
                {
                    fruit.map((v) => (
                        <li key={v.id}>{v.name}</li>
                    ))
                }
            </ul>
        </div>
    )
}
