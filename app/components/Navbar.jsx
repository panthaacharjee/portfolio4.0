import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-red-500 px-16 py-5'>
        <div className="container flex justify-between">
            <p>Pantha Acharjee</p>
            <div className="nav-container blue circleBehind">
                <a>HOME</a>
                <a>ARTICLES</a>
                <a>PORTFOLIO</a>
                <a>ABOUT</a>
                <a>CONTACT</a>
            </div>
        </div>
    </nav>
  )
}

export default Navbar