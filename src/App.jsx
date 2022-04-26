import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

import {Listing} from "./components/listing"
import {AddListing} from "./components/add_listing"
import { Routes , Route  } from 'react-router-dom'
import {Admin_login} from "./components/admin_login"
import {Admin_site} from "./components/admin_site"
import {Update} from "./components/update_listing"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

          <Routes>
            <Route path='/' element={<Listing/>}></Route>
            <Route path='/admin' element={<Admin_login/>}></Route>
            <Route path='/admin_site' element={<Admin_site/>}></Route>
            <Route path='/addlisting' element={<AddListing/>}></Route>

            <Route path='/admin_site/:id' element={<Update/>}></Route>


            


          </Routes>


    
     {/* <AddListing/> */}
    </div>
  )
}

export default App
