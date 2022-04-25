import { Change_name ,Change_city,Change_address,Change_capacity,Change_cost_per_daya,Change_verified,Change_rating  } from "./action"

const initalState = {
    name : "",
    city : "",
    address : "",
    capacity : "",
    cost_per_day : "",
    verified : "",
    ratting : ""
}

export  const Reducer = (store = initalState , {type , payload} ) => {
    // console.log( "stor",store)
    switch(type)

    {
        case Change_name : 
            return ({ ...store , name : payload})
        case Change_city : 
            return ({...store , city : payload})    
        case Change_address :    
            return ({...store , address : payload})
        case Change_capacity : 
            return ({...store , capacity : payload})    
        case Change_cost_per_daya :
            return({...store , cost_per_day : payload})    
        case Change_verified :
            return ({...store , verified :payload })   
        case Change_rating :
            return ({...store , ratting :payload })    
        default :
            return store        
    }

}
