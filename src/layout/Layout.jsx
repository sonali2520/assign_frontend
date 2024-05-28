/* eslint-disable no-unused-vars */
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Layout(props) {
    

    return (
        <>
          <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
            <Outlet/>
            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        
        </div> 
        <div className="drawer-side">
            <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li><Link to="/filter">Filter</Link></li>
            <li><Link>Visuals</Link></li>
            </ul>
        
        </div>
        </div>  
        </>
    )
}
