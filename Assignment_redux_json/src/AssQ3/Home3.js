import React, { useEffect } from 'react'
import { Adddat, Adddata, RemoveUser } from './reducer3'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Home3() {
    const dispatch = useDispatch()
    useEffect(() => {
        fetch("http://localhost:5001/user").then((res) => res.json()).then((data) => dispatch(Adddat(data)))
    }, [])
    const user = useSelector(st => st.xyz)
    const handleDelete =  (id)=>
    {
        dispatch(RemoveUser(id))       
    }
    return (
        <div>
            <h1>Home page</h1>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-lg-6'>
                        <Link to='/add' className='btn btn-info my-2'>Add data</Link>
                        <table className='table table-striped'>
                            <thead >
                                <tr >
                                    <th className='bg-secondary fs-5'>Id</th>
                                    <th className='bg-secondary fs-5'>Name</th>
                                    <th className='bg-secondary fs-5'>Email</th>
                                    <th className='bg-secondary fs-5'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                   user && user.map((v) => (
                                        <tr key={v.id}>
                                            <td>{v.id}</td>
                                            <td>{v.name}</td>
                                            <td>{v.email}</td>
                                            <td>
                                                <button onClick={()=>handleDelete(v.id)} className='btn btn-danger fw-semibold'>Delete</button>
                                                <Link to={'/edit/'+v.id}  className='btn btn-warning mx-3 fw-semibold'>Edit</Link>
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
    )
}
