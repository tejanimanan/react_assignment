import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function AddData() {

    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const navigate = useNavigate()
    const handleAdd = (e) => {
        e.preventDefault()
        const dataobj = { name, email };
        fetch("http://localhost:5001/student", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dataobj)
        })
            .then((res) => {
                if (res) {
                    navigate('/')
                }
            })
        // .then((v)=>{console.log(v)})
    }
    return (
        <div>
            <div className='container my-3'>
                <div className='row justify-content-center '>
                    <div className='col-lg-6 text-start'>
                        <div>
                            <h3> Add Student Data</h3>

                        </div>

                        <div className='card p-3 shadow'>
                            <form onSubmit={handleAdd}>
                                <div className="mb-3">
                                    <label className="form-label">
                                         Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="exampleInputPassword1"
                                        value={name}
                                        onChange={(e) => { setname(e.target.value) }}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">
                                        Email 
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        value={email}
                                        onChange={(e) => { setemail(e.target.value) }}
                                    />
                                    
                                </div>


                                <button type="submit" className="btn btn-success">
                                    Add data
                                </button> <Link to="/" className='btn btn-danger m-1'>cancle</Link>
                            </form>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}


export default AddData