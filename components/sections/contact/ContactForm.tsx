export default function ContactForm() {
  return (
    <form action="https://api.web3forms.com/submit" method="POST" className="contact-form">
      <input type="hidden" name="access_key" value="4af7645a-a2c0-404c-b070-504e3ab63484" />

      <input
        type="text"
        name="name"
        placeholder="Full name"
        autoComplete="off"
        required
        className="input-field"
      />
      <input
        type="email"
        name="email_address"
        placeholder="Email address"
        autoComplete="off"
        required
        className="input-field"
        suppressHydrationWarning
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone"
        autoComplete="off"
        className="input-field"
      />
      <textarea name="message" placeholder="Enter Message" required className="input-field" />

      <button type="submit" className="btn btn:hover">
        <span className="span">Send Message.</span>
        <i className="fa-solid fa-arrow-right" aria-hidden />
      </button>
    </form>
  )
}
