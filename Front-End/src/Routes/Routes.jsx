import React from 'react'
import { Routes as Router, Route } from 'react-router-dom'
import Dashboard from '../Components/Dashboard'
import Home from '../Components/Home'
import Login from '../Components/Login'
import ManageProfile from '../Components/ManageProfile'
import SignUp from '../Components/SignUp'
const Routes = () => {
    return (
        <Router>
            <Route path='/' element={< Home />} />
            <Route path='/login' element={< Login />} />
            <Route path='/register' element={< SignUp />} />
            <Route path='/dashboard' element={< Dashboard />} />
            <Route path='/profile-update' element={< ManageProfile />} />
        </Router>
    )
}
export default Routes
