import Card from '../../components/card/card-main/Card'
import CardProfile from '../../components/card/portifolio/CardInternal'
import { useProfile } from '../../context/useProfile'
import './Education.css'

const Education = () => {
  const { profile } = useProfile()
  return (
    <>
      <div className="container">
        {profile?.education.map(education => {
          return (
            <div className="profile-grid">
              <Card>
                <CardProfile props={education} />
              </Card>
            </div>
          )
        })}
      </div>
    </>
  )
}
export default Education
