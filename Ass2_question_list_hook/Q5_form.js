import React, { use, useState } from 'react'

export default function Q5_form() {
    const [name,setName] = useState()
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const [data,setData] = useState(null)
   const handlesubmit = (e) =>(
    e.preventDefault(),
    setData([{name,email,password}])
)
    return (
        <div className='container'>
            <div className='row my-4'>
                <div className='col-lg-6'>
                    <div className='card text-start'>
                        <div className='card-body'>
                            <form className='form' onSubmit={handlesubmit}>
                                <div className='mb-3'>
                                    <lable className="form-lable">Name</lable>
                                    <input className='form-control' onChange={(e)=>setName(e.target.value)}  type='text' value={name}></input>
                                </div>
                                <div className='mb-3'>
                                    <lable className="form-lable">Email</lable>
                                    <input className='form-control' onChange={(e)=>setEmail(e.target.value)} type='email' value={email}></input>
                                </div>
                                <div className='mb-3'>
                                    <lable className="form-lable">password</lable>
                                    <input className='form-control' onChange={(e)=>setPassword(e.target.value)} type='password' value={password}></input>
                                </div>
                                <div className='mb-3'>
                                    <button type='submit' className='btn btn-success fw-bold' >Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='card shadow'>
                        <div className='card-body'>
                                {
                                    data && data.map((v)=>(
                                        <div key={v.name}>
                                            <h2>{v.name}</h2>
                                            <h2>{v.email}</h2>
                                            <h2>{v.password}</h2>
                                        </div>
                                    ))
                                }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
