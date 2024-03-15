import '../../../src/global.css'
import './Homepage.css'

import Header from '../../components/header/Header'
import CardSimple from '../../components/card/CardSimple'
import Card from '../../components/card/Card'
import Icon from '../../components/Icon'
import Footer from '../../components/footer/Footer'
import { NavLink } from 'react-router-dom'

const profile = {
  name: 'Jean Oliveira Franco',
  nickName: 'Jean Franco',
  idade: '31',
  contact: '+351 963-329-230',
  socialMedia: {
    linkedin: 'https://www.linkedin.com/in/jean-franco-81a496249/',
    gitHub: 'https://github.com/jeanfrancodev'
  }
}

function Homepage() {
  return (
    <>
      <div className="container">
        <div className="grid-card-apresentation">
          <NavLink to={'/about'} className={'navlink'}>
            <Card>
              <div className="contents-card">
                <img
                  className="my-image"
                  src="../public/WhatsApp Image 2022-09-01 at 08.34.08.jpeg"
                />
                <div className="about-contents">
                  <p>A WEB DEVELOPER</p>
                  <p>Jean Franco.</p>
                  <p>I am web design basead a san francisco</p>
                </div>
                <Icon />
              </div>
            </Card>
          </NavLink>
        </div>
        <div className="grid-card-education">
          <Card>
            <CardSimple
              image="../../../public/keyboard-key-education.jpg"
              title="Education"
              subtitle="MORE ABOUT ME"
            />
          </Card>
        </div>
        <div className="grid-card-projects">
          <NavLink to={'/portifolio'} className={'navlink'}>
            <Card>
              <CardSimple title="Projects" subtitle="SHOWCASE" />
            </Card>
          </NavLink>
        </div>
        <div className="grid-card-services">
          <Card>
            <div className="content-card-services">
              <div className="icon-services">
                <img src="./public/icons8-javascript-96.png" alt="" />
                <img src="./public/icons8-c-sharp-logo-96.png" alt="" />
                <img src="./public/icons8-react-80.png" alt="" />
                <img src="./public/icons8-typescript-96.png" alt="" />
              </div>
              <div>
                <div>
                  <p>Specialization</p>
                  <p>Services Offering</p>
                </div>
                <Icon />
              </div>
            </div>
          </Card>
        </div>
        <div className="grid-card-social-media">
          <NavLink to={'/Contacts'}className={'navlink'}>
            <Card>
              <CardSimple title="Social-media" subtitle="STAY WITH ME" />
            </Card>
          </NavLink>
        </div>
        <div className="grid-lets-work">
          <NavLink to={'/Contacts'}className={'navlink'}>

          <Card>
            <div className="lets-work-content">
              <img src="./public/Detail Icon.png" alt="" />
              <span>
                <p>Let's Work</p>
                <p>Together</p>
              </span>
              <Icon />
            </div>
          </Card>
          </NavLink>
        </div>
      </div>
    </>
  )
}

export default Homepage
