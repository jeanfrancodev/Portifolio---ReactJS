import React, { useContext, useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import './index.css'
import Homepage from './pages/Homepage/Homepage.jsx'
import Portifolio from './pages/Portifolio/Portifolio.jsx'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Education from './pages/Education/Education.jsx'
import Contacts from './pages/Contacts/Contacts.jsx'
import Header from './components/header/Header.jsx'
import Footer from './components/footer/Footer.jsx'
import { ProfileProvider } from './context/useProfile.jsx'
import { About } from './pages/About/About.jsx'
import { ThemeContext, ThemeProvider } from './context/themeContext.jsx'

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
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
        path: '/education',
        element: <Education />
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
    <ThemeProvider>
      <ProfileProvider>
        <RouterProvider router={router} />
      </ProfileProvider>
    </ThemeProvider>
  </>
)
