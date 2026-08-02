export default function ContactMap() {
  return (
    <iframe
      className="map"
      title="Location — Dombivli, Maharashtra"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60282.793445233176!2d73.05838201982075!3d19.209410251799152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7958ef72d8707%3A0x84bf6ab96e280b08!2sDombivli%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1727904902464!5m2!1sen!2sin"
      width={600}
      height={450}
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  )
}
