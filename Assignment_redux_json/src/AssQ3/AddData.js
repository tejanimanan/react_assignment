import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { addUser } from './reducer3'

export default function AddData() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const user = useSelector(st => st.xyz)
  const handleAdd = (e) => {

    e.preventDefault()

    dispatch(addUser({name,email }))

    navigate('/')
    window.location.reload()


  }
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center text-start">
          <div className="col-xl-6">
            <div>
              <h2>Users Data</h2>
              <Link to='/' className="btn btn-primary my-3">Go back</Link>
            </div>
            <div>
              <form onSubmit={handleAdd}>
                <div>
                  <label>Name:</label>
                  <input type='text' value={name} onChange={(e) => { setName(e.target.value) }} className='form-control'></input>
                </div>

                <div>
                  <label>Email:</label>
                  <input type='text' value={email} onChange={(e) => { setEmail(e.target.value) }} className='form-control'></input>
                </div>

                <div>

                  <input type='submit' className='btn btn-primary'></input>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


