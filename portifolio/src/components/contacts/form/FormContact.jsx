import './formContact.css'
import dotenv from 'dotenv'
import emailjs from 'emailjs-com'

// dotenv.config();
export function FormContact() {
  const userID = import.meta.env.VITE_REACT_APP_USER_ID
  const templateID = import.meta.env.VITE_REACT_APP_TEMPLATE_ID
  const serviceID = import.meta.env.VITE_REACT_APP_SERVICE_ID

  function sendEmail(e) {
    e.preventDefault()

    emailjs.sendForm(serviceID, templateID, e.target, 'BqMgay_bgjqMaqLrP').then(
      result => {
        console.log(result.text)
      },
      error => {
        console.log(error.text)
      }
    )
    e.target.reset()
  }
  return (
    <div className="form-wrapper">
      <form onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="name" placeholder="Your name" />
        <label>E-mail</label>
        <input
          type="email"
          name="email"
          placeholder="exemple@email.com"
          required
        />
        <label>Subject</label>
        <input type="text" name="subject" placeholder="Lets work..." />
        <label>Message</label>
        <textarea
          name="message"
          rows="5"
          placeholder="type your message here.."
          required
        />
        <button type="submit" value="Submit">
          {' '}
          Submit{' '}
        </button>
      </form>
    </div>
  )
}
