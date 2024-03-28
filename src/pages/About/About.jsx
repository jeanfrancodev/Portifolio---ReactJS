import Card from '../../components/card/card-main/Card'
import { useProfile } from '../../context/useProfile'
import './About.css'

export const About = () => {
  const { profile } = useProfile()

  return (
    <>
        <div className="grid-about">
          <Card>
            <div className="card-about">
              <div className="content-about">
                <p>ABOUT ME:</p>
                <p>
                  Olá, sou {profile?.name}, sou Brasileiro, tenho {profile?.age}{' '}
                  anos, estou em transição de carreira para a área de
                  tecnologia, um passo que representa não apenas uma mudança
                  profunda, mas também uma jornada de autodescoberta e
                  crescimento. Meu comprometimento é inabalável, dedicando-me
                  diariamente ao aprendizado e ao desenvolvimento de habilidades
                  essenciais no universo de desenvolvimento Web. Sinto-me mais
                  preparado do que nunca, fruto de uma jornada de aprendizado
                  contínuo e determinação. Estou pronto para os desafios que
                  esta nova fase da minha vida profissional possa trazer,
                  confiante em minhas habilidades e no meu potencial de alcançar
                  o sucesso.
                </p>
              </div>
              <div className="objetive-about">
                <p>OBJECTIVE: </p>
                <p>{profile?.objetive}</p>
              </div>
              <div className="skills-about">
                <p>SOFTSKILLS: </p>
                <p>{profile?.skills[0]}</p>
                <p>{profile?.skills[1]}</p>
              </div>
            </div>
          </Card>
        </div>
    </>
  )
}
