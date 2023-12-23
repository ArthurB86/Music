import React from 'react'
import '../../style/Form.scss'
const ContactForm = () => {
  const [formStatus, setFormStatus] = React.useState('Envoyé')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Envoie en cours...')
    const { name, email, subject, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      subject: subject.value,
      message: message.value,
    }
    console.log(conFom)
  }
  return (
    <div className="containerForm">
      <h2 className="mb-3">Nous Contacter</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Nom
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="subject">
            Sujet
          </label>
          <input className="form-control" type="message" id="subject" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" required />
        </div>
        <div className='test'>
        <button className="btn-1 custom-btn" type="submit">
          {formStatus}
        </button>
        </div>
      </form>
    </div>
  )
}
export default ContactForm