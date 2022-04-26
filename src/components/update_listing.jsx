import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


// import Store from "../Redux/store"
import  { useState } from "react"
import { useDispatch , useSelector } from "react-redux"
import axios from "axios"
import { useParams } from "react-router-dom"

import {
change_city,
change_name,
change_address,
change_capacity,
change_cost_per_day,
change_verified,
change_rating
} from "../Redux/action"
import { height } from '@mui/system';




export  function Update() {

  const dispatch = useDispatch()
  const value = useSelector((store => store) )

  console.log("value" ,value)

    // const [text, setText] = useState({});
    // const [data , setData] = useState()

    const [name , setName] = useState()
    const [city , setCity] = useState()
    const [address , setAddress] = useState()
    const [capacity , setCapacity] = useState()
    const [cost_per_day , setCost_per_day] = useState()
    const [verified , setVerified] = useState()
    const [ratting , setRatting] = useState()


    const  data = {
      name : name,
      city : city,
      address : address,
      capacity : capacity,
      cost_per_day : +cost_per_day,
      verified : verified,
      ratting : +ratting
    } 

    const {id} = useParams()



    const UpdateList = () => {
      console.log("text",data);
      

          axios.patch(`https://refreshertest.herokuapp.com/listing/${id}`,data).then(function(res){
          alert("Update succesful")
           console.log("data",res.data)
          })

        dispatch(setName(name))
        dispatch(setCity(city))
        dispatch(setAddress(address))
        dispatch(setCapacity(capacity))
        dispatch(setCost_per_day(cost_per_day))
        dispatch(setVerified(verified))
        dispatch(setRatting(ratting))

          //  console.log(register_data)
  };  

 
  


  return (
    <div>

        <h1>Add New List</h1>


          <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch'  },
            }}
            noValidate
            autoComplete="off"
          >

            <select 
              
              id="demo-simple-select-helper" 
              name="Name"
              defaultValue={name}
               onChange={(e) => {
                    setName(e.target.value)
                }}
              style={{width:"225px", height : "60px" , borderRadius:"5px" , borderBlockColor:"lightgray"}}  
            > 

              <option> Name </option>
              <option >Cat</option>
              <option>Dog </option>
              <option>Rabbits</option>
            </select>  <br /> 

            

          <TextField  id="outlined-basic" name="city" value={city}   onChange={(e) => {
                    setCity(e.target.value)
                }} label="City" variant="outlined" /> <br />
          <TextField id="outlined-basic" name="address" value={address}   onChange={(e) => {
                    setAddress(e.target.value)
                }} label="Address" variant="outlined" /> <br />



          <select 
              
              id="demo-simple-select-helper" 
              defaultValue={capacity}
               onChange={(e) => {
                    setCapacity(e.target.value)
                }}
              name="Capcity"
              type="number"
              style={{width:"225px", height : "60px" ,  borderRadius:"5px" , borderBlockColor:"lightgray"}}  
            > 
              <option >Capacity</option>
              
              <option >1-5kg</option>
              <option>5-10kg</option>
              <option>10-20kg</option>
              <option>20-40kg</option>

            </select>  <br /> 
    
         

          

          <TextField id="outlined-basic" name="Cost" value={cost_per_day}   onChange={(e) => {
                    setCost_per_day(e.target.value)
                }} label="Cost per day" variant="outlined" /> <br />

          <TextField id="outlined-basic" name="Verified" value={verified}   onChange={(e) => {
                    setVerified(e.target.value)
                }} label="Verified" variant="outlined" /> <br />
          <TextField id="outlined-basic" name="Ratting" value={ratting}   onChange={(e) => {
                    setRatting(e.target.value)
                }} label="Rating" variant="outlined" /> <br />
          </Box>

          <Button variant="contained" onClick={UpdateList} >Submit</Button>
    </div>
  );
}
