import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import '../shared/styles/login.css'

const FormLogin = ({ setIsLogged }) => {
  
  const { register, handleSubmit, reset} = useForm()

  const submit = data => {
    // console.log(data);
    const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/users/login'
    axios.post(URL, data) 
        .then(res => {
            localStorage.setItem('token', res.data.data.token)
            setIsLogged(res.data.data.user) 
        })
        .catch(err => console.log(err))
    reset({
        email: '',
        password: ''
    })
  }

  return (
    <>
        <h1 className='welcome-text'>Welcome to Academlo Store</h1>
      <div className="login__form">
        <h2 className='login__title'>Login</h2>
        <hr />
        
        <form onSubmit={handleSubmit(submit)} className='login__form-container'>
          <label htmlFor="user">User</label>
          <input {...register('email')} className='login__input' type="text" placeholder='Username' id='email' />
          <label htmlFor="password" >Password</label>
          <input {...register('password')} className='login__input' type="password" placeholder='Password' id='password' />
          <button className='login__btn'>Login</button>

        </form>
      </div>
    </>
  )
}

export default FormLogin