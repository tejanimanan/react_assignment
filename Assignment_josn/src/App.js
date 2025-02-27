import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Component1/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import AddData from './Component1/AddData';
import EditData from './Component1/EditData';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/add' element={<AddData />}></Route>
          <Route path='/Edit_Student/:id' element={<EditData />}></Route>
         
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
