import { Change_name ,Change_city,Change_address,
    Counter_incr, Counter_Dec , Change_password ,Change_Email , Change_token,
    Change_capacity,Change_cost_per_daya,Change_verified,Change_rating  } from "./action"

const initalState = {
    name : "",
    city : "",
    address : "",
    capacity : "",
    cost_per_day : "",
    verified : "",
    ratting : "",
    counter : 0,
    email : "",
    password : "" ,
    isAuth : false ,
    token : ""
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
            
        case  Counter_incr :
            return ({ ...store , counter:store.counter+payload})
        case  Counter_Dec  : 
            return ({
                ...store , counter : store.counter - payload
            })

        case  Change_Email :
            return({...store , email : payload  , isAuth:true})

        case Change_password :
            return({...store , password : payload})   
        case Change_token : 
            return ({...store , token : payload})
        
            
        default :
            return store        
    }

}
