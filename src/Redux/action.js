export const Change_name =  "Change_name"
export const Change_city = "Change_city"
export const Change_address =  "Change_address"
export const Change_capacity =  "Change_capacity"
export const Change_cost_per_daya =  "Change_cost_per_daya"
export const Change_verified =  "Change_verified"
export const Change_rating = "Change_rating"
export const Counter_incr = "Counter_incr"
export const Counter_Dec = "Counter_Dec"

export const Change_Email =  "Change_Email"
export const Change_password  = "Change_password"
export const Change_token =  "Change_token"




export const change_name = (payload) => ({
    type : Change_name ,
    payload
})

export const change_city = (payload) => ({
    type : Change_city,
    payload
})

export const change_address = (payload) => ({
    type : Change_address,
    payload
})

export const change_capacity = (payload) => ({
    type : Change_capacity,
    payload
})

export const change_cost_per_day = (payload) => ({
    type : Change_cost_per_daya,
    payload
})

export const change_verified = (payload) => ({
    type : Change_verified, 
    payload
})

export const change_rating = (payload) => ({
    type : Change_rating ,
    payload
})


export const change_token = (payload) => ({
    type : Change_token ,
    payload
})

export const change_email = (payload) => ({
    type : Change_Email ,
    payload
})

export const change_password = (payload) => ({
    type : Change_password ,
    payload

})



export const conter_inc = (payload) => ({
    type : Counter_incr,
    payload
})


export const counter_dec = (payload) => ({
    type : Counter_Dec,
    payload
})
 