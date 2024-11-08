import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div class="p-8 m-3 flex justify-between">
        <div class="">
            <h1 class="text-black font-bold font-mono text-xl">Brisphere</h1>
            </div>
              <ul class="ml-10 flex">
                <Link to='/discover'>
                    <li class="ml-3">Discover</li>
                </Link>
                <Link to='/services'>
                 <li class="ml-3">Services</li>
                </Link>
                <Link to='/about'>
                 <li class="ml-3">About us</li>
                 </Link>
              </ul>
    </div>
            
  )
}

export default Header