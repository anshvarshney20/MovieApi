import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
        <div className="container-fluid">

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="fa fa-bars"></span> Menu
          </button>
          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav m-auto">
              <li className="nav-item active"><Link to='/' className="nav-link">Home</Link></li>
              <li className="nav-item"><a href="#" className="nav-link">Work</a></li>
              <li className="nav-item"><a href="#" className="nav-link">Blog</a></li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar