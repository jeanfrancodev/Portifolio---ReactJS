import '../../../src/global.css'
import './Portifolio.css'

import Header from '../../components/header/Header'
import CardSimple from '../../components/card/CardSimple'
import Card from '../../components/card/Card'
import Footer from '../../components/footer/Footer'
import { useEffect, useState } from 'react'

// const profile = {
//   name: 'Jean Oliveira Franco',
//   nickName: 'Jean Franco',
//   idade: '31',
//   contact: '+351 963-329-230',
//   socialMedia: {
//     linkedin: 'https://www.linkedin.com/in/jean-franco-81a496249/',
//     gitHub: 'https://github.com/jeanfrancodev'
//   }
// }

const Portifolio = () => {
  return (
    <>
      <div className="container">
        <div className="project-1">
          <Card>
            <CardSimple
              video="public/video/sport-card.mp4"
              title="Projeto 1"
              subtitle="HTML/CSS"
            />
          </Card>
        </div>
        <div className="project-2">
          <Card>
            <CardSimple
              video="public/video/ApiAnimes.mp4"
              title="Projeto 2"
              subtitle="JAVASCRIPT"
            />
          </Card>
        </div>
        <div className="project-3">
          <Card>
            <CardSimple
            video="public/video/ApiEcommerce.mp4"
            title="Projeto 3" subtitle="JAVASCRIPT" />
          </Card>
        </div>
        <div className="project-4">
          <Card>
            <CardSimple title="Projeto 4" subtitle="REACT" />
          </Card>
        </div>
      </div>
    </>
  )
}

export default Portifolio
