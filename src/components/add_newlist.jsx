import React, { useState } from "react"
import { useDispatch , useSelector } from "react-redux"
import {
    change_city,
    change_name,
    change_address,
    change_capacity,
    change_cost_per_day,
    change_verified,
    change_rating
    } from "../Redux/action"

import { Store } from '../redux/store'
import axios from "axios"



export const Newlistadd = () => {


    // ---------------------------------

    const [show, setShow] = useState(false)
    const [text, setText] = useState({});
    const [data , setData] = useState()
    const [name , setName] = useState()
    const [city , setCity] = useState()

  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setText({ ...text, [name]: value });
  
      console.log(text)
    };
   
  
  

    //----------------------------------



    const dispatch = useDispatch()

    const value  = useSelector((store) => store)
    console.log("value",value)


    const hadelSubmit = () => {

        const {
            name,
            city,
            capacity,
            rating,
            cost,
            address,
            verifed
        }  = text;

        axios.post("https://refreshertest.herokuapp.com/listing" , text ).then(function(res){
            console.log("data",res.data)
        })

        dispatch( change_name(name) )
        dispatch( change_city(city) )
    }

    return(
        <div>

            <h1>Add New List</h1>


            <form>
                <label htmlFor="">Name</label>

            </form>

            <input type="text"
                placeholder="Ent" 

                onChange={(e) => {
                setName(e.target.value)

             }}

            /> <br />

            <input type="text"
                 placeholder="City " 
             
                onChange={(e) => {
                    setCity(e.target.value)
             }}

            />  

            <input type="text"
                 placeholder="City " 
             
                onChange={(e) => {
                    setCity(e.target.value)
             }}

            /> 
            
             <button 
                onClick={hadelSubmit}
             > Submit</button>
        </div>
    )
}