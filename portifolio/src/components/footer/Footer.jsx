import { NavLink } from 'react-router-dom'
import './footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <div className="top-footer">
        <p>Jean</p>
        <p>Franco</p>
      </div>
      <div className="mid-footer">
        <NavLink to={'/'} className={'navlink'}>
          <p>HOME </p>
        </NavLink>
        <NavLink to={'/About'} className={'navlink'}>
          <p>ABOUT</p>
        </NavLink>
        <NavLink to={'/Portifolio'} className={'navlink'}>
          <p>PROJECTS</p>
        </NavLink>
        <NavLink to={'/Education'} className={'navlink'}>
          <p>EDUCATION</p>
        </NavLink>
        <NavLink to={'/Contacts'} className={'navlink'}>
          <p>CONTACTS</p>
        </NavLink>
      </div>
      <div className="bot-footer">
        <p>© All rights reserved by</p>
        <p>JEAN</p>
      </div>
    </div>
  )
}

export default Footer
