import { NavLink } from 'react-router-dom'
import './header.css'
import { useProfile } from '../../context/useProfile'
import { useTheme } from '../../context/themeContext'

function Header() {
  const { profile } = useProfile()
  const { theme, setTheme } = useTheme()

  return (
    <div className="header">
      <button className="menu-button" onClick={() => {}}></button>

      <div className="header-title">
        <p>{profile?.nickName}</p>
      </div>
      <div className="menu">
        <NavLink to={'/'} className={'navlink'}>
          <p>Home</p>
        </NavLink>
        <NavLink to={'/About'} className={'navlink'}>
          <p>About</p>
        </NavLink>
        <NavLink to={'/Portifolio'} className={'navlink'}>
          <p>Projects</p>
        </NavLink>
        <NavLink to={'/Education'} className={'navlink'}>
          <p>Education</p>
        </NavLink>
        <NavLink to={'/Contacts'} className={'navlink'}>
          <p>Contacts</p>
        </NavLink>
      </div>
      <button
        className="button-theme"
        onClick={() => setTheme(theme == 'dark' ? 'light' : 'dark')}
      ></button>
    </div>
  )
}

export default Header
