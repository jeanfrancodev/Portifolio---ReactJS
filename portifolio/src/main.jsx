import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import './index.css'
import Homepage from './pages/Homepage/Homepage.jsx'
import Portifolio from './pages/Portifolio/Portifolio.jsx'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './pages/About/About.jsx'
import Contacts from './pages/Contacts/Contacts.jsx'
import Header from './components/header/Header.jsx'
import Footer from './components/footer/Footer.jsx'

const Layout = () => {
  const [profile, setProfile] = useState(null)
  useEffect(() => {
    try {
      fetch('profile.json', {
        headers: {
          Accept: 'application/json'
        }
      })
        .then(res => res.json())
        .then(async res => {
          setProfile(res.profile)
        })
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <>
      <Header profile={profile} />
      <Outlet />
      <Footer profile={profile} />
    </>
  )
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Homepage />
        // errorElement: <Error />,
        // }
      },
      {
        path: '/about',
        element: <About />
        // errorElement: <Error />,
        // }
      },
      {
        path: '/contacts',
        element: <Contacts />
        // errorElement: <Error />,
        // }
      },
      {
        path: '/portifolio',
        element: <Portifolio />
        // errorElement: <Error />,
        // }
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>
)
