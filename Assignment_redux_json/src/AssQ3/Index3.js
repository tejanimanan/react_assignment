import React from 'react'
import Home3 from './Home3'
import { Provider } from 'react-redux'
import { Store3 } from './Store3'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Adddata } from './reducer3'
import AddData from './AddData'
import EditData from './EditData'
export default function Index3() {
    return (
        <div>
            <Provider store={Store3}>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Home3 />}></Route>
                        <Route path='/add' element={<AddData />}></Route>
                        <Route path='/edit/:id' element={<EditData />}></Route>
                    </Routes>
                </BrowserRouter>
            </Provider>
        </div>
    )
}
