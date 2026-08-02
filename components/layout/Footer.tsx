import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="copyright">Copyright &amp; Design By Aaditya Gunjal - 2024</p>

        <Link href="/#top" className="back-top-btn">
          <span className="span">Back To Top</span>
          <i className="fa-solid fa-arrow-up" aria-hidden />
        </Link>
      </div>
    </footer>
  )
}
