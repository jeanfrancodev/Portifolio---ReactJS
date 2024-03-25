import './Contacts.css'
import Card from '../../components/card/card-main/Card'
import { useProfile } from '../../context/useProfile'
import { CardLetsWork } from '../../components/card/lets-work/CardLetsWork'
import { FormContact } from '../../components/contacts/form/FormContact'
import CardIcon from '../../components/contacts/card/CardIcon'

const Contacts = () => {
  const { profile } = useProfile()

  return (
    <>
      <div className="container">
        <div className="container-reverse">
          <div className="grid-card-contact">
            <div className="card-fone-email">
              <CardIcon>
                <img src="/email.png" />
              </CardIcon>
              <p className="p-contact">{profile?.contacts.email}</p>
            </div>
            <div className="card-fone-email">
              <CardIcon>
                <img src="/fone.png" />
              </CardIcon>
              <p className="p-contact">{profile?.contacts.fone}</p>
            </div>
            <div className="card-link">
              <p className="title-click-access">Click e access:</p>
              <div>
                <div>
                  <a href={profile?.contacts.linkedin}>
                    <CardIcon>
                      <img src="/linkedin.png" />
                    </CardIcon>
                    <p className="p-contact">My LinkedIn</p>
                  </a>
                </div>
                <div>
                  <a href={profile?.contacts.gitHub}>
                    <CardIcon>
                      <img src="/github.png" />
                    </CardIcon>
                    <p className="p-contact">My gitHub</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-card-form">
            <Card>
              <CardLetsWork />
              <FormContact />
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}
export default Contacts
