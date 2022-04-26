import React, { useState } from "react";
import axios from "axios" 
import {Link} from "react-router-dom"

export const Listing = () => {

    const [data ,setData] = useState()
    const [status , setStatus] = useState(true)


        React.useEffect(() => {

               if(data === undefined){
                   axios.get("https://refreshertest.herokuapp.com/listing").then(function(res){
                       setData(res.data)  
                   })
               } 
        },[])
        // console.log(data)


        const ShortByCost = () => {
            var newdata = [...data]
            if(status){
                newdata.sort(function(a,b){
                    return a.cost_per_day - b.cost_per_day
                })
                setStatus(false)
                setData(newdata)
            }else{
                newdata.sort(function(a,b){
                    return  b.cost_per_day -a.cost_per_day 
                })
                setStatus(true)
            }
            setData(newdata)
        }

        const ShortByRating = () => {
            var newdata = [...data]
            if(status){
                newdata.sort(function(a,b){
                    return a.ratting - b.ratting
                })
                setStatus(false)
                setData(newdata)
            }else{
                newdata.sort(function(a,b){
                    return  b.ratting -a.ratting 
                })
                setStatus(true)
            }
            setData(newdata)
            console.log(newdata)
        }

        
        const ShortByCity = () => {
            var newdata = [...data]
            if(status){
                newdata.sort(function(a,b){
                    if( a.city > b.city){
                        return 1
                    }if(a.city < b.city){
                        return -1
                    }
                    return 0
                })
                setStatus(false)
                setData(newdata)
            }else{
                newdata.sort(function(a,b){
                    if( a.city < b.city){
                        return 1
                    }if(a.city > b.city){
                        return -1
                    }
                    return 0 
                })
                setStatus(true)
            }
            setData(newdata)
        }


    return (
            <div className="maindiv">
                <Link to={"/addlisting"} > Add new pets </Link>

                <Link to={"/admin"} > Addmin site</Link>


                <div>

                    <button
                        onClick={ShortByCost}
                        >  
                        {/* (status ? "Filter_Cost_Low"  : "Filter_Cost_high"); */}
                        Filter_Cost_Low
                    </button>


                    <button
                        onClick={ShortByRating}
                    >
                        Sort_By_Rating
                    </button>


                    <button
                        onClick={ShortByCity}
                    >
                        Sort_by_City
                    </button>
                </div>





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
                                    
                                </tr>
                            )
                            })
                        }
                    </tbody>
            </table>

        </div>

    )
}