import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './Login'
import CreateOrder from './CreateOrder'
import OrdersList from './OrdersList'
import SignUp from './SignUp'
import UpdateOrder from './UpdateOrder'
import Home from './Home'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="Login" element={<Login/>}></Route>
        <Route path="CreateOrder" element={<CreateOrder/>}></Route>
        <Route path="OrdersList" element={<OrdersList/>}></Route>
        <Route path="SignUp" element={<SignUp/>}></Route>
        <Route path="UpdateOrder" element={<UpdateOrder/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)


