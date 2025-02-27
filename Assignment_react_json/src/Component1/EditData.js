
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function EditData() {

    const { id } = useParams();
    console.log(id)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    useEffect(() => {
        fetch('http://localhost:5001/student/' + id)
            .then((res) => { return res.json() })
            .then((data) => {
                setName(data.name)
                setEmail(data.email)
            })
    }, [])


    const navigate = useNavigate()
    const handleEdit = (e) => {
        e.preventDefault()
        const dataobj = { name, email };
        fetch("http://localhost:5001/student/" + id, {
            method: 'Put',
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
                <div className='row justify-content-center ' >
                    <div className='col-lg-6 text-start'>
                        <div>
                            <h3> Edit Student Data</h3>

                        </div>

                        <div className='card p-3 shadow'>
                            <form onSubmit={handleEdit}>
                                <div className="mb-3">
                                    <label className="form-label">
                                         Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="exampleInputPassword1"
                                        value={name}
                                        onChange={(e) => { setName(e.target.value) }}
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
                                        onChange={(e) => { setEmail(e.target.value) }}
                                    />
                                    
                                </div>


                                <button type="submit" className='btn btn-success m-1'>Update</button>
                                <Link to="/" className='btn btn-danger m-1'>Go Back</Link>
                            </form>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditData