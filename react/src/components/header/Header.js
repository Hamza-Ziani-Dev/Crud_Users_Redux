import React from 'react'
import { useSelector } from 'react-redux';
import './Header.css';
function Header(props) {
  const {name } = useSelector((state)=> state.users.items)
  return (
    <div className='header'>
      <h1>Demo React</h1>
      <p> Hello {name}</p>
    </div>
  )
}

export default Header