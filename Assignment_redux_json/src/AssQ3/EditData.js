import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { edituser } from './reducer3'

function EditData() {
    const { id } = useParams()
    console.log({ id })
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const add = () => {
        dispatch(edituser({ id, name, email }));
        navigate('/')
    }

    useEffect(
        () => {
            fetch(`http://localhost:5001/user/${id}`)
                .then(res => res.json())
                .then(data => {
                    setname(data.name)
                    setemail(data.email)
                })
        }, []
    )

    return (
        <>
            
            <div className='container mt-5'>
                <div className='row justify-content-center'>
                    <div className='col-lg-6'>
                        <div className='card shadow p-3 text-start'>
                            <div>
                                <h3>Edit data</h3>
                            </div>
                            <div className='mb-3'>
                                <label>Name:</label>
                                <input type='text' value={name} onChange={(e) => { setname(e.target.value) }} className='form-control'></input>
                            </div>

                            <div className='mb-3'>
                                <label>Email:</label>
                                <input type='text' value={email} onChange={(e) => { setemail(e.target.value) }} className='form-control'></input>
                            </div>

                            <div className='mb-3 d-flex justify-content-between'>

                                <button className='btn btn-success' onClick={add}>Update</button>
                                <Link to={'/'} className='btn btn-danger' onClick={add}>cancle</Link>

                            </div>


                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default EditData