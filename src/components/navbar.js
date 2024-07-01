import React from 'react'
import './navbar.css'


const Navbar = (props) => {
   
  return (
    <div className='main_navbar'>
      <div className="bars_container">
         <div className="bars" onClick={props.handleOpen}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
         </div>
      </div>
 
      <div className="nav nav-black" style={{transform: `translate(${props.sidebar}%)`}}>
         <div className="nav nav-red" style={{transform: `translate(${props.sidebar}%)`}}>
             <button className="close-btn" onClick={props.handleCross}>
               <i className="fas fa-times"></i>
             </button>
             <div className="nav-box">Pas<span>sio</span>n</div>
             <div className="nav-orange">
                <ul>
                   <li><a href="">About</a></li>
                   <li><a href="">Projects</a></li>
                   <li><a href="">Contacts</a></li>
                   <li><a href="">Jobs</a></li>
                </ul>
             </div>
         </div>
       </div>
    </div>
  )
}

export default Navbar
