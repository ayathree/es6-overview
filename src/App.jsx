import { useEffect, useState } from 'react'

import './App.css'
import Watch from './assets/components/Watch/Watch'

function App() {
  const [watches, setWatches] = useState([])

  useEffect(()=>{
    fetch('watch.json')
    .then(res=> res.json())
    .then(data=>setWatches(data))
  },[])

  // const watches =[
  //   {id:1, name: 'sumsung', price: '10000'},
  //   {id:2, name: 'rolax', price: '20000'},
  //   {id:3, name: 'apple', price: '30000'}
  // ]

  return (
    <>
     
      <h1>Vite + React</h1>
      {
        watches.map(watch=> <Watch 
          key={watch.id} 
          watch={watch}></Watch>)
      }
     
      
    </>
  )
}

export default App
