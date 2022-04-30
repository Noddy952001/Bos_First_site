import React, { useState } from "react";
import axios from "axios" 
import {Link} from "react-router-dom"
import {useSelector} from "react-redux"

export const Booking = () => {

    
    const [data ,setData] = useState()
    const [status , setStatus] = useState(true)
    const [name , setName] = useState()
    const booking_storee = useSelector((store) => 
        store.booking_data
    )

    console.log("booking_storee",booking_storee)


        React.useEffect(() => {

               if(data === undefined){
                   axios.get("https://refreshertest.herokuapp.com/booking").then(function(res){
                       setData(res.data)  
                   })
               } 
        },[])
        // console.log(data)

    return (
            <div className="maindiv">

            <table className="table">
                    <thead>
                        <tr>
                            <th className="table">id</th>
                            <th  className="table"> Name</th>
                            <th  className="table">City</th>
                            <th  className="table">Address</th>
                            <th  className="table">Capacity</th>
                            <th  className="table">Cost per 
                            day</th>
                            <th  className="table">Verify</th>
                            <th  className="table">Rating</th>
                            <th  className="table">Booking</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map((el,p) => {
                            return  (
                                <tr>
                                    <td className="table">{p+1}</td>
                                    <td className="table" id="txt1"> {el.name}</td>
                                    <td className="table" id="txt">{el.city}</td>
                                    <td className="table"id="txt3" >{el.address}</td>
                                    <td className="table" id="txt">{el.capacity}</td>
                                    <td className="table" id="txt">{el.cost_per_day}</td>
                                    <td className="table" id="txt">{el.verified}</td>
                                    <td className="table" id="txt">{el.ratting}</td>
                                    <td className="table" id="txt"> pending </td>
                                </tr>
                            )
                            })
                        }
                    </tbody>
            </table>

        </div>

    )
}