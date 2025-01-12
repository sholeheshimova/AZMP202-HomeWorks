import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from "../AdminHeader/index.module.scss"

const AdminHeader = () => {
  return (
    <>
   
        <div className={styled.adminheader}>
            <div className="adminlogo">
                <h2>Admin Header</h2>
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink to={"/admin"}>Add</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    
    </>
  )
}

export default AdminHeader