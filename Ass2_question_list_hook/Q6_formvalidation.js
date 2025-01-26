import React, { use, useRef, useState } from 'react'

export default function Q6_formvalidation() {
    const [name,setName] = useState()
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const [data,setData] = useState(null)
    const [msg,setMsg] = useState()

    const btn = useRef(null)
   const handlesubmit = (e) =>(
    
    e.preventDefault(),
    setData([{name,email,password}])
)

const validateEmail = (e) => {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if (emailRegex.test(e)) {
      setMsg("Email is ok")
      btn.current.disabled =false
    } else {
      setMsg("Enter proper email")
      btn.current.disabled =true
      
    }
  }
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
                                    <input onInput={(e)=>validateEmail(e.target.value)} className='form-control' onChange={(e)=>setEmail(e.target.value)} type='text' value={email}></input>
                                    <p className='p-3'>{msg}</p>
                                </div>
                                <div className='mb-3'>
                                    <lable className="form-lable">password</lable>
                                    <input className='form-control' onChange={(e)=>setPassword(e.target.value)} type='password' value={password}></input>
                                </div>
                                 <div className='mb-3'>
                                    <button ref={btn} type='submit' className='btn btn-success fw-bold' >Submit</button>
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
