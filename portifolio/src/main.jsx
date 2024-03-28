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
import { ThemeProvider } from './context/themeContext.jsx'
import { MenuProvider } from './context/menuContext.jsx'
import { ContainerMain } from './components/card/container-main/Container-main.jsx'

const Layout = () => {
  return (
    <>
      <Header />
      <ContainerMain>
        <Outlet />
      </ContainerMain>
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
        <MenuProvider>
          <RouterProvider router={router} />
        </MenuProvider>
      </ProfileProvider>
    </ThemeProvider>
  </>
)
