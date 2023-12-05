import React from 'react'
import Filters from '../organims/Filters'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
        <div className='flex flex-row items-start justify-between'>
          <h1>React Shop</h1>
          <Link to="/carrito"><button className=' inline-block bg-blue-300 p-2 rounded-xl text-blue-600 font-bold'>carrito de compras</button></Link>
        </div>
        <Filters/>
    </>
  )
}
