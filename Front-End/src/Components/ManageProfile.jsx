import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import Style from "../Styles/Styles.module.css"
const ManageProfile = () => {
    const [Username, setUsername] = useState("")
    const [Password, setPassword] = useState("")
    const id = JSON.parse(localStorage.getItem("userID"))
    console.log('id', id);
    const handleUpdate = (params) => {
        const id = JSON.parse(localStorage.getItem("userID"))
        console.log('id', id);
        if (params == "username") {
            let user = { username: Username }
            axios.patch(`http://localhost:5000/profile/${id}`, user).then((data) => {
                alert("Update Successful")
                console.log('updated ata', data.data);
            }).catch((err) => {
                console.log("Something is wrong", err)
            });
        }
        else {
            let pass = { password: Password }
            axios.patch(`http://localhost:5000/profile/${id}`, pass).then((data) => {
                alert("Update Successful")
                console.log('updated data', data.data);
            }).catch((err) => {
                console.log("Something is wrong", err)
            })
        }
    }
    return (
        <div style={{ margin: "30px 650px", width: "300px", height: "30px" }}>
            <div>
                <label htmlFor="">Change Username  <input onChange={(e) => setUsername(e.target.value)} placeholder='username' className={Style.inputBox} type="text" /></label>
                <button onClick={() => handleUpdate("username")}>Update Username</button>
                <br />
                <br />
                <br />
                <label htmlFor="">Change Password  <input onChange={(e) => setPassword(e.target.value)} placeholder='Password' className={Style.inputBox} type="text" /></label>
                <button onClick={() => handleUpdate("password")}>Update Password</button>
            </div>
        </div>
    )
}
export default ManageProfile
