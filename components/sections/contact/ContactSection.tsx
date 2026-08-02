import ContactForm from './ContactForm'
import ContactMap from './ContactMap'
import ContactList from './ContactList'

export default function ContactSection() {
  return (
    <section className="section contact" aria-label="contact me" id="contact">
      <div className="container">
        <h2 className="title h3 section-title">Get In Touch</h2>

        <div className="contact-content">
          <ContactForm />
          <ContactMap />
          <ContactList />
        </div>
      </div>
    </section>
  )
}
