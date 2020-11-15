import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../Images/Logo.png'
import './navBar.scss'

const NavBar = () => {
    return (
        <section >  
        <Navbar sticky="top"  bg="red" expand="lg">
      <Navbar.Brand style={{ textDecoration:" none",color: "#C82333 !important"}} ><Link to="/"><img className="logo" src={logo} alt="logo" /></Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <NavLink className="mr-5 menu-item" to="/home">
            Home
          </NavLink>
          <NavLink className="mr-5 menu-item" to="/about">
            About
          </NavLink>
          <NavLink className="mr-5 menu-item" to="/service">
            Service
          </NavLink>
          <NavLink className="mr-5 menu-item" to="/concerns">
                            Concerns
          </NavLink>
          <NavLink className="mr-5 menu-item" to="/event">
          Event
        </NavLink>
          <NavLink className="mr-5 menu-item" to="/contact">
            Contact
          </NavLink>
          <NavLink className="mr-5 menu-item" to="/login">
            Login
          </NavLink>
        </Nav>
      </Navbar.Collapse>
      </Navbar>
    
    
    
</section>
    );
};

export default NavBar;


     

// <section >
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-md-2 logo">
//                             <img src={logo} className="img-fluid" alt="asd"></img>
//                         </div>
//                         <div className="col-md-10 menu text-right">
//                             <nav>
//                             <ul>
//                                 <li>
//                                     <Link to="/home">Home</Link>
//                                 </li>
//                                 <li>
//                                     <Link to="/home">Our Portfolio</Link>
//                                 </li>
//                                 <li>
//                                     <Link to="/activities">Our Team</Link>
//                                 </li>
//                                 <li>
//                                     <Link to="/login">Contact Us</Link>
//                                 </li>
//                                 <li>
//                                     <Link to="/login"><Button className='header-btn'>Login</Button>
//                                 </Link>
//                                 </li>
//                             </ul>
//                             </nav>
//                         </div>
//                 </div>
//                 <div className="row header-content">
//                     <div className="col-md-5 content-left">
//                         <h1 >Let's Grow Your <br /> Brand To The <br /> Next Level</h1>
//                         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta a amet dolore nemo quis perferendis!</p>
//                         <Button className='header-btn'>Hire Us</Button>
//                     </div>
//                     <div className="col-md-7">
//                         <img className="img-fluid" src={Frame} alt=""/>
//                     </div>
//                 </div>
//                 </div>
//         </section>