/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useSelector } from 'react-redux';
import './SideBar.css';
function SideBar(props) {
  const { name } = useSelector((state)=> state.users.items);
  return (
    <div className='sidebar'>
      <ul>
        <li> <a href="#">Home</a></li>
        <li> <a href="#">About</a></li>
        <li> <a href="#">Contact</a></li>
        <li> <a href="#">Blog</a></li>
        <li> <a href="#">Hello { name }</a></li>
      </ul>
    </div>
  )
}

export default SideBar