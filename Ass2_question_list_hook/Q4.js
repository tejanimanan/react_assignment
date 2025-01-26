import React from 'react'
const user = [
    {id:1,name:"manan"},
    {id:2,name:"om"},
    {id:3,name:"harmit"},
    {id:4,name:"jenil"},
    {id:4,name:"miraj"}
]
export default function Q4() {
    return (
        <div>
            <p className='fs-4'>Create a list of users where each user has a unique id. Render the user list
                usingReact and assign a unique keyto each user.</p>
            <ul className='text-start'>
                {user.map((v)=>(
                    <li key={v.id}>{v.name}</li>
                ))}
            </ul>
        
        </div>
    )
}
