import React from 'react';
import iconDashBoard from './analytics.svg'
import './SideBar.css'
import {Link} from 'react-router-dom'
export default function SideBar() {
  return (
        
            <nav className="sidenav">
                <img src={iconDashBoard} alt="" />
                <Link to="/">Finances</Link>
                <Link to="DashBoardEmployees">Emploi</Link>
            </nav>
        
    );
}
