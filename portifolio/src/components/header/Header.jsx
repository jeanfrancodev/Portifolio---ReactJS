import { NavLink } from 'react-router-dom'
import './header.css'
import { useEffect, useState } from 'react'

function Header(props) {
  const [theme, setTheme] = useState('dark')
  useEffect(() => {
    document.body.classList.add(theme)
    if (theme == 'dark') {
      document.body.classList.remove('light')
    } else {
      document.body.classList.remove('dark')
    }
  }, [theme])
  return (
    <div className="header">
      <div>
        {/* <p>{props.profile ? props.profile.nickName : 'carregando...<3'}</p> */}
        <p>{props.profile?.nickName}</p>

      </div>
      <div>
        <NavLink to={'/'} className={'navlink'}>
          <p>Home</p>
        </NavLink>
        <NavLink to={'/About'} className={'navlink'}>
          <p>About</p>
        </NavLink>
        <NavLink to={'/Contacts'} className={'navlink'}>
          <p>Contacts</p>
        </NavLink>
      </div>
      <button onClick={() => setTheme(theme == 'dark' ? 'light' : 'dark')}>
        Theme {theme == 'dark' ? 'light' : 'dark'}
      </button>
    </div>
  )
}

export default Header
