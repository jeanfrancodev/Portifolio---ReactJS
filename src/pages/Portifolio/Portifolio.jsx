import '../../../src/global.css'
import './Portifolio.css'
import Card from '../../components/card/card-main/Card'
import { useProfile } from '../../context/useProfile'
import ContentCard from '../../components/homepage/ContentCard'

const Projects = () => {
  const { profile } = useProfile()

  return (
    <>
      <div className="project-1">
        <Card>
          <ContentCard
            video="/video/sport-card.mp4"
            title="Projeto - 'sport-card'  HTML/CSS"
            subtitle={
              <a href={profile?.linkProject.htmlCss}>Veja no github. </a>
            }
          />
        </Card>
      </div>
      <div className="project-2">
        <Card>
          <ContentCard
            video="/video/ApiAnimes.mp4"
            title="Projeto - 'ApiAnimes' JAVASCRIPT"
            subtitle={
              <a href={profile?.linkProject.javaScript}>Veja no github.</a>
            }
          />
        </Card>
      </div>
      <div className="project-3">
        <Card>
          <ContentCard
            video="/video/ApiEcommerce.mp4"
            title="Projeto - 'ApiEcommerce'  JAVASCRIPT"
            subtitle={
              <a href={profile?.linkProject.javaScript1}>Veja no github. </a>
            }
          />
        </Card>
      </div>
      <div className="project-4">
        <Card>
          <ContentCard
            video="/video/SeeThisProject.mp4"
            title="Projeto - 'Portfolio'  REACT"
            subtitle={<a href={profile?.linkProject.react}>Veja no github. </a>}
          />
        </Card>
      </div>
    </>
  )
}

export default Projects
