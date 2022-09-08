import React from 'react'
import './styles/footer.css'

const Footer = () => {
  return (
    <footer>
        <p className='footer__text'>&copy; Academlo 2022</p>
        
        <i className="fa-brands fa-instagram footer__icons"></i>
        <i className="fa-brands fa-linkedin footer__icons"></i>
        <i className="fa-brands fa-youtube footer__icons"></i>
        
    </footer>
  )
}

export default Footer