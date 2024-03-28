import './Contacts.css'
import Card from '../../components/card/card-main/Card'
import { useProfile } from '../../context/useProfile'
import { CardLetsWork } from '../../components/lets-work/CardLetsWork'
import { FormContact } from '../../components/contacts/form/FormContact'
import CardCircle from '../../components/contacts/card/CardCircle'

const Contacts = () => {
  const { profile } = useProfile()

  return (
    <>
      <div className="container-reverse">
        <div className="grid-card-contact">
          <div className="card-fone-email">
            <CardCircle>
              <img src="icons-contact/email.png" />
            </CardCircle>
            <p className="p-contact">{profile?.contacts.email}</p>
          </div>
          <div className="card-fone-email">
            <CardCircle>
              <img src="icons-contact/fone.png" />
            </CardCircle>
            <p className="p-contact">{profile?.contacts.fone}</p>
          </div>
          <div className="card-link">
            <p className="title-click-access">Click e access:</p>
            <div>
              <div>
                <a href={profile?.contacts.linkedin}>
                  <CardCircle>
                    <img src="icons-contact/linkedin.png" />
                  </CardCircle>
                  <p className="p-contact">My LinkedIn</p>
                </a>
              </div>
              <div>
                <a href={profile?.contacts.gitHub}>
                  <CardCircle>
                    <img src="icons-contact/github.png" />
                  </CardCircle>
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
    </>
  )
}
export default Contacts
