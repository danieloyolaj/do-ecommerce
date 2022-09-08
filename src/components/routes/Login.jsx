import React, { useState, useEffect } from 'react'
import FormLogin from '../login/FormLogin'
import FormLogout from '../login/FormLogout'

const Login = () => {

  const [isLogged, setIsLogged] = useState()

  useEffect(() => {
    setIsLogged(localStorage.getItem('token'))    
  }, [])

  return ( 
    <div className='login-container'>
      {
        isLogged ? 
        <FormLogout setIsLogged={setIsLogged} isLogged={isLogged} />
        :
        <FormLogin setIsLogged={setIsLogged} />

      }
    </div>
  )
} 

export default Login