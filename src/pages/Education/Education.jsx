import Card from '../../components/card/card-main/Card'
import CardProfile from '../../components/card-education/CardProfile'
import { useProfile } from '../../context/useProfile'
import './Education.css'

const Education = () => {
  const { profile } = useProfile()
  return (
    <>
      {profile?.education.map((education, index) => {
        return (
          <div key={index} className="profile-grid">
            <Card>
              <CardProfile props={education} />
            </Card>
          </div>
        )
      })}
    </>
  )
}
export default Education
