import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

import {Listing} from "./components/listing"
import {AddListing} from "./components/add_listing"
import {Newlistadd} from "./components/add_newlist"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Listing/>
     {/* <AddListing/> */}
    </div>
  )
}

export default App
