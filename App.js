import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [val,setVal]=useState({name:'',psw:''});
  let [nerr,setnErr]=useState();
  let [perr,setpErr]=useState();

  function inputhandel(e) 
  {
    const {name,value}=e.target
    setVal({...val,[name]:value});
    // console.log(name);
    // console.log(value);
  }

  function submit(e) 
  {

    e.preventDefault();
    valid(val);  
  }

  function valid(val) 
  {
    const n=/[a-zA-Z]/i;
    const p=/^(?=.*[a-zA-Z0-9]).{8,12}$/;

    
    if(!val.name)
    {
      alert('Please enter name');
    }
    else if(!n.test(val.name))
    {
      setnErr('enter valid name');
    }
    else
    {
      setnErr('');
    }
    
    if(!val.psw)
    {
      alert('Password must be required');
    }
    else if(!p.test(val.psw))
    {
      setpErr('enter valid password');
    }
    else
    {
      setpErr('');
    }

  }
    
  

  return (
  <>
  <div className="box">
  <center>
  <input type='text' placeholder="Enter Your Name" name='name' onChange={inputhandel}/><br />
  <span style={{color:'red'}}>{nerr}</span>
  <br />
  <input type='password' placeholder='Enter Password' name='psw' onChange={inputhandel}/><br />
  <span style={{color:'red'}}>{perr}</span>
  <br />
  <button type='submit' onClick={submit}>Submit</button>
  </center>
  </div>
  </>
  );
}

export default App;
