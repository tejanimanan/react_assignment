import React, { useEffect, useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

function Home() {

    const [stud, setstud] = useState('')
    const navigate = useNavigate()
    useEffect(() => {
        fetch("http://localhost:5001/student")
            .then((r) => { return r.json() })
            .then((v) => { setstud(v) })
    }, [stud])

    const ondelete = (id) => {
        fetch("http://localhost:5001/student/" + id, {
            method: 'DELETE',
         }).then((res) => {
                if (res) {
                        alert("delete data ")
                }
            })
        setstud(stud.filter((v)=>v.id!=id))
    }
    return (
        <div>
            <div className='container'>
                <div className='row justify-content-center '>
                    <div className='col-xl-6 text-center'>
                        <div>
                            <h3>  Student Data</h3>
                            <Link to='/add' className='btn btn-primary m-3'>Add New Student</Link>
                        </div>
                        <div className='text-center '>
                            <table className='table table-striped'>
                                <thead>
                                    <tr className='text-center'>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>E-Mail</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        stud && stud.map((v) => (
                                            <tr key={v.id}>
                                                <td>{v.id}</td>
                                                <td>{v.name}</td>
                                                <td>{v.email}</td>
                                                <td>
                                                    <Link className='btn btn-success mx-2' to={`/Edit_Student/${v.id}`}>Edit</Link>
                                                     <button onClick={() =>  ondelete(v.id) } className='btn btn-danger'>Delete</button>
                                                
                                                </td>
                                            </tr>
                                        ))
                                    }


                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Home