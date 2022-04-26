import React, { useState } from "react"
import { useDispatch , useSelector } from "react-redux"
import {change_email,change_password, change_token} from "../Redux/action"
import { Store } from '../redux/store'
import axios from "axios"
import { useNavigate } from "react-router-dom"





export const Admin_login = () => {
    
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const [email  , setEmail] = useState()
    const [password  , setPassword] = useState()
    const [token  , setToken ]  =  useState()

    const value  = useSelector((store) => store)

    console.log("value",value)

    React.useEffect(()=>{
        if(token){
            navigate("/admin_site")
        }
    },[token])

    console.log("token", token)


    const hadelSubmit = () => {
        var data = { email,password}

        axios.post("https://refreshertest.herokuapp.com/login" , data ).then(function(res){
            console.log("data",res.data)
           setToken(res.data.token)


        //    setToken(r)
        })

        dispatch( change_email(email) )
        dispatch( change_password(password) )
        dispatch( change_token(token) )
       
    

    }

    return(
        <div>

            <h1> Admin login page </h1>

            <input type="text"
                placeholder="enter email" 

                onChange={(e) => {
                setEmail(e.target.value)

             }}

            /> <br />

            <input type="text"
                 placeholder="enter password" 
             
                onChange={(e) => {
                    setPassword(e.target.value)
             }}

            />  <br />
             <button 
                onClick={hadelSubmit}
             > Submit</button>
        </div>
    )
}