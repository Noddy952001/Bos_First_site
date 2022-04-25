export const Change_name =  "Change_name"
export const Change_city = "Change_city"
export const Change_address =  "Change_address"
export const Change_capacity =  "Change_capacity"
export const Change_cost_per_daya =  "Change_cost_per_daya"
export const Change_verified =  "Change_verified"
export const Change_rating = "Change_rating"



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