import React from 'react'
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import TextField from '@mui/joy/TextField';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';

import { useState } from 'react';
import Validation from './Validation'

import "./errors.css"

import axios from 'axios';

import { useNavigate } from "react-router-dom";

const Login = () => 
{

  const navigate = useNavigate();

  const [inputs,setInputs]=useState({
     email:"",password:""});


  const handleChange=(e)=>{
    setInputs((prevState)=>({
      ...prevState,
      [e.target.name]:[e.target.value]

     }))
  };                                            

  const [errors,setErrors]=useState({});

  const handleSubmit=(e)=>
  {
    e.preventDefault();
    console.log(inputs);    
    setErrors(Validation(inputs));
    logdata(inputs);
    
  }

  const logdata=(values)=>
  {
    var axios = require('axios');
    var data = JSON.stringify({
      "email": values.email,
      "password": values.password
    });

    var config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://devacc3.pythonanywhere.com/accounts/login/',
      headers: { 
        'Content-Type': 'application/json'
      },
      data: data
    };

    
  }
 


  return (
    <>
    

   
    <CssVarsProvider>
      <main>
        <Sheet
          sx={{
            width: 300,
            mx: 'auto', // margin left & right
            my: 4, // margin top & botom
            py: 3, // padding top & bottom
            px: 2, // padding left & right
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            borderRadius: 'sm',
            boxShadow: 'md',
          }}
          variant="outlined"
        >
          <div>
            <Typography level="h4" component="h1">
              <b>Welcome!</b>
            </Typography>
            <Typography level="body2">Sign in to continue.</Typography>
          </div>


          <TextField 
            name="email"
            type="email"
            placeholder="johndoe@email.com"
            label="Email"
            onChange={handleChange}
            value={inputs.email}
          />

          {errors.email && <p className='error'>{errors.email}</p>}

          <TextField
            name="password"
            type="password"
            placeholder="password"
            label="Password"
            onChange={handleChange}
            value={inputs.password}
          />

          {errors.password && <p className='error'>{errors.password}</p>}


          <Button sx={{ mt: 1}} onClick={handleSubmit}>Log in</Button>
          <Typography 
            endDecorator={<Link href="/sign-up">Sign up</Link>}
            fontSize="sm"
            sx={{ alignSelf: 'center' }}
          >
            Don&apos;t have an account?
          </Typography>
        </Sheet>
      </main>
    </CssVarsProvider>

    </>
  )

  
}

export default Login



