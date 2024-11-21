import React from 'react';

const Navbar = ({ setActiveComponent }) => {
  return (
    <div>
      <nav>
        <menu>
          <li><a href = "#" onClick={(ev)=>{ev.preventDefault();setActiveComponent("welcome")}}>Welcome</a></li>
          <li><a href = "#" onClick={(ev)=>{ev.preventDefault();setActiveComponent("staff")}}>Staff</a></li>
          <li><a href = "#" onClick={(ev)=>{ev.preventDefault();setActiveComponent("students")}}>Students</a></li>
          <li><a href = "#" onClick={(ev)=>{ev.preventDefault();setActiveComponent("courses")}}>Courses</a></li>
        </menu>
      </nav>
    </div>
  )
}

export default Navbar;