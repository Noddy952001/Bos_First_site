import React, { useState } from "react";
import axios from "axios" 
import {Link} from "react-router-dom"
import { useParams } from "react-router-dom";

export const Admin_site = () => {

    const [data ,setData] = useState()
    const [status , setStatus] = useState()
    

    const {id} = useParams()



        React.useEffect(() => {

               if(data === undefined){
                   axios.get("https://refreshertest.herokuapp.com/listing").then(function(res){
                       setData(res.data.listing)  
                   })
               } 
        },[])
        // console.log(data)

        const DeleteList = () => {

            axios.delete(`https://refreshertest.herokuapp.com/listing/${id}`,data).then(function(res){
                alert("Delete succesful")
                console.log("data",res.data)
                setData(res.data)  
            })
        }


        React.useEffect(() => {

            if(data === undefined){
                axios.get("https://refreshertest.herokuapp.com/booking").then(function(res){
                    setStatus(res.data)  
                })
            } 
     },[])
     // console.log(data)



    return (
            <div className="maindiv">

                <h1>Update Listing</h1>

            <table className="table">
                    <thead>
                        <tr>
                            <th className="table">id</th>
                            <th  className="table"> Name</th>
                            <th  className="table">City</th>
                            <th  className="table">Address</th>
                            <th  className="table">Capacity</th>
                            <th  className="table">Cost per day</th>
                            <th  className="table">Verify</th>
                            <th  className="table">Rating</th>
                            <th className="table">Update</th>
                            <th className="table">delete</th>
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
                                    <td className="table" id="txt"> <Link to={`${el._id}`}> <button>Update</button> </Link>  </td>
                                    <td className="table" id="txt"> <button
                                        onClick={DeleteList}
                                    >delete</button> </td>

                                </tr>
                            )
                            })
                        }
                    </tbody>
            </table>



            <h1>Update Penfing Status</h1>



            <table className="table">
                    <thead>
                        <tr>
                            <th className="table">id</th>
                            <th  className="table"> Name</th>
                            <th  className="table">City</th>
                            <th  className="table">Address</th>
                            <th  className="table">Capacity</th>
                            <th  className="table">Cost per day</th>
                            <th  className="table">Verify</th>
                            <th  className="table">Rating</th>
                            <th className="table">status </th>
                            <th className="table">Update status </th>

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
                                    <td className="table" id="txt">{el.booking_status}</td>
                                    <td className="table" id="txt"> <button
                                        onClick={DeleteList}
                                    >Update</button> </td>

                                </tr>
                            )
                            })
                        }
                    </tbody>
            </table>


        </div>

    )
}