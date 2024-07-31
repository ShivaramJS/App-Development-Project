import React from 'react'
import Login from './Component/Login.jsx'
import Register from './Component/Register.jsx';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
       <Routes>
        <Route path='/' exact element={<Login/>}></Route>
        <Route path='/register' exact element={<Register/>}></Route>
       </Routes>
    </div>
    
  );
}

export default App;
