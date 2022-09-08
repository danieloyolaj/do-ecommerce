import React from 'react'

const FormLLogout = ({ isLogged, setIsLogged }) => {

  const handleClick = () => {
    setIsLogged()
    localStorage.removeItem('token')
  }

  return (
    <div className='form-logout'>
      <i className="form-logout__icon fa-solid fa-user"></i>
      <h2 className='form-logout__username'>
        {`${isLogged?.firstName} ${isLogged?.lastName}`}
      </h2>
      <i className="form-logout__check fa-regular fa-circle-check"></i>
      <button onClick={handleClick} className='form-logout__btn'>Logout</button>
    </div>
  )
}

export default FormLLogout