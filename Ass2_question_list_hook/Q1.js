import React, { useState } from 'react'

export default function Q1() {
    const [login,Islogin] = useState(true)
    let x;
    if(login)
    {
        x=<><button className='bg-successx btn fs-4' onClick={()=>Islogin(false)}>Login</button><p className='p-3 my-2 text-danger fs-3 fw-bold  '> user is Logout</p></>
    }
    else{
        x=<><button className='btn btn-danger fs-4' onClick={()=>Islogin(true)}>logout</button><p className='p-3 my-2 text-success fs-3 fw-bold'>user is login</p></>
    }
    
    return (
        <div>
            <h1>Conditional Rendering</h1>
            <p>Create a component that conditionally displays a login or logout button based
                onthe user’s login status</p>
            <h2>Login status</h2>
            {x}
        </div>
    )
}
