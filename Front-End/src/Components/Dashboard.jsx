import React from 'react'
import Style from "../Styles/Styles.module.css"
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
const Dashboard = () => {
    const [todoArr, setTodoArr] = useState([])
    const [todo, setTodo] = useState("")
    const handleTodo = () => {
        let todoObj = {
            todo: todo
        }
        axios.post("http://localhost:5000/todos", todoObj).then(() => {
            getData()
        }).catch((err) => {
            console.log("Something is wrong", err)
        });
        setTodo("")
    }
    useEffect(() => {
        getData()
    }, [])
    async function getData() {
        const { data } = await axios.get("http://localhost:5000/todos")
        setTodoArr(data.data)
    }
    return (
        <div className={Style.parent} >
            <h1>Dashboard</h1>
            <nav className={Style.navbar}>
                <Link className={Style.navbar} to={"/profile-update"} > <button style={{ textAlign: "right", cursor: "pointer" }} className={Style.navbar}> Profile </button> </Link>
            </nav>
            <br />
            <br />
            <input style={{ margin: "30px 650px", width: "300px", height: "30px" }} type="text" placeholder='Pls Enter Something' onChange={(e) => setTodo(e.target.value)} />
            <button style={{ margin: "5px 650px", width: "300px", height: "30px" }} onClick={handleTodo}>Add Todo</button>
            <br />
            <br />
            <div style={{ margin: "30px 650px", width: "300px", height: "30px", fontSize:"20px" }}>
                {
                    todoArr.map((ele) => {
                        return (
                            <>
                                <div>{ele.todo}</div>
                                <br />
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Dashboard
