import Image from 'next/image'
import { contactItems } from '@/data/constants'

export default function ContactList() {
  return (
    <ul className="contact-list">
      {contactItems.map((item) => (
        <li className="contact-item" key={item.alt}>
          <div className="item-icon">
            <Image src={item.icon} width={50} height={50} alt={item.alt} />
          </div>
          <div>
            {item.isAddress
              ? item.lines.map((line, i) => (
                  <address key={i} className="title h6">
                    {line}
                  </address>
                ))
              : item.lines.map((line, i) => (
                  <span key={i} className="title h6">
                    {line}
                  </span>
                ))}
          </div>
        </li>
      ))}
    </ul>
  )
}
