import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../../features/users/api';

import './Forms.css';
function Forms( props) {

  const [name , setName] = useState('');
  const [email , setEmail] = useState('');
  const dispatch = useDispatch();

  const handelSubmit = (e) =>{
    e.preventDefault();
    dispatch(addUser(name, email), dispatch)
  }
  return (
    <div className='form'>
      <form onSubmit={handelSubmit}>
        <div className='form-group'>
          <input type="text" placeholder='Enter Name ...' onChange={(e)=>{setName(e.target.value)}}/>
        </div>
        <div className='form-group'>
          <input type="email" placeholder='Enter Email ...' onChange={(e)=>{setEmail(e.target.value)}}/>
        </div>
        <div className='form-group'>
          <input type="submit" value='Save'/>
        </div>
      </form>
    </div>
  )
}

export default Forms