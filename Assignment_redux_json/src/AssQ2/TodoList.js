import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Addlist, deletelist } from './reducer2'

export default function TodoList() {
    const [data, setData] = useState('')
    const list = useSelector(st => st.xyz)
    // const [list,SetList] = useState()
    const dispatch = useDispatch()
    const Deletedata = (id) => {
        dispatch(deletelist(id))

    }
    return (
        <div>
            <h1>
                TodoList
            </h1>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <div className='d-flex mb-5'>
                            <input placeholder='Enter data...' onChange={(e) => setData(e.target.value)} value={data} type='text' className='mx-2 form-control' ></input>
                            <button onClick={() => { dispatch(Addlist({ id: list.length + 1, name: data })); setData('') }} className='btn btn-info'>Add</button>
                        </div>
                        <table className='table '>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    list && list.map((v) => (
                                        <tr key={v.id}>
                                            <td>{v.id}</td>
                                            <td>{v.name}</td>
                                            <td>
                                                <button onClick={() => Deletedata(v.id)} className='btn btn-info'>Delete</button>
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
