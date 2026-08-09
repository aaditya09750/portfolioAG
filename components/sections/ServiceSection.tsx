import { services } from '@/data/constants'
import Image from 'next/image'

const serviceAltText: Record<string, string> = {
  '1': 'Full Stack Development icon',
  '2': 'Project Management icon',
  '3': 'Graphic Designing icon',
  '4': 'Database Management icon',
}

export default function ServiceSection() {
  return (
    <section className="service text-center" aria-label="my services" id="service">
      <div className="container">
        <ul className="service-list">
          {services.map(({ icon, label }) => (
            <li className="service-item" key={icon}>
              <div className="service-card">
                <div className="card-icon">
                  <Image
                    src={`/assets/images/service-icon-${icon}.svg`}
                    width={80}
                    height={80}
                    loading="lazy"
                    alt={serviceAltText[icon] || 'Service icon'}
                  />
                </div>
                <h3 className="card-title">
                  <a href="#">{label}</a>
                </h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
