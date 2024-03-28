import '../../../src/global.css'
import './Homepage.css'
import Card from '../../components/card/card-main/Card'
import ContentCard from '../../components/homepage/ContentCard'
import Icon from '../../components/icon-component/Icon'
import { NavLink } from 'react-router-dom'
import { CardLetsWork } from '../../components/lets-work/CardLetsWork'

function Homepage() {
  return (
    <>
      <div className="grid-card-apresentation">
        <NavLink to={'/about'} className={'navlink'}>
          <Card>
            <div className="contents-card">
              <div className="img-card-contents">
                <img className="my-image" src="/img-home/img-profile.jpg" />
              </div>
              <div className="about-contents">
                <p>A WEB DEVELOPER</p>
                <p>Jean Franco.</p>
                <p>The developer jr. your company needs.</p>
              </div>
              <div className="icon-apresentation">
                <Icon />
              </div>
            </div>
          </Card>
        </NavLink>
      </div>
      <div className="grid-card-education">
        <NavLink to={'/education'} className={'navlink'}>
          <Card>
            <ContentCard
              image="/img-home/icon-education.png"
              title="MORE ABOUT ME"
              subtitle="Education"
            />
          </Card>
        </NavLink>
      </div>
      <div className="grid-card-projects">
        <NavLink to={'/portifolio'} className={'navlink'}>
          <Card>
            <ContentCard
              image="/img-home/icon-project.png"
              title="SHOWCASE"
              subtitle="Projects"
            />
          </Card>
        </NavLink>
      </div>
      <div className="grid-card-services">
        <Card>
          <div className="content-card-services">
            <div className="icon-services">
              <img src="/img-home/icon-javascript.png" alt="" />
              <img src="/img-home/icon-c-sharp.png" alt="" />
              <img src="/img-home/icon-react.png" alt="" />
              <img src="/img-home/icon-typescript.png" alt="" />
            </div>
            <div>
              <div>
                <p>SPECIALIZATION</p>
                <p>Services Offering</p>
              </div>
              <Icon />
            </div>
          </div>
        </Card>
      </div>
      <div className="grid-card-social-media">
        <NavLink to={'/Contacts'} className={'navlink'}>
          <Card>
            <ContentCard
              image="/img-home/icon-social-media.png"
              title="STAY WITH ME"
              subtitle="Social-media"
            />
          </Card>
        </NavLink>
      </div>
      <div className="grid-lets-work">
        <NavLink to={'/Contacts'} className={'navlink'}>
          <Card>
            <CardLetsWork />
          </Card>
        </NavLink>
      </div>
    </>
  )
}

export default Homepage
