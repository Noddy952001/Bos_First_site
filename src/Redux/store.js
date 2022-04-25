import {createStore} from "redux"
import { Reducer } from "./reducer"


export const Store = createStore(Reducer,
    window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_() 
)


