import { NavLink } from 'react-router-dom'
import './header.css'
import { useTheme } from '../../context/themeContext'
import { menuDropDown } from '../../context/menuContext'

function Header() {
  const { theme, setTheme } = useTheme()
  const { isActive, setIsActive } = menuDropDown()
  return (
    <>
      {isActive && (
        <div className="overlay" onClick={() => setIsActive(false)}></div>
      )}
      <div className="header">
        <button
          className="menu-button"
          onClick={() => {
            setIsActive(!isActive)
          }}
        ></button>

        <div className="header-title">
          <p>Front-End Jr.</p>
        </div>
        <div className={` menu${isActive ? '-active' : '-inactive'}`}>
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
    </>
  )
}
export default Header
