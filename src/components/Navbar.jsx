import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-primary ">
        <div class="container-fluid">
            <Link to={'/home'}><a class="nav-link navLink text-white" href='/home' ><u>Home/Dashboard</u></a></Link>
            <div class="collapse navbar-collapse justify-content-center" id="navbarTogglerDemo02">
                <h1 class="text-white">  The Employee App  </h1>
            </div>
            <Link to={'/empform'}><a class="nav-link navLink text-white"  href='/empform'><u>Employee Form</u></a></Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar