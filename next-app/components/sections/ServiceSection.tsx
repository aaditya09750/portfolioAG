import { services } from '@/data/constants'
import Image from 'next/image'

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
                    width={80} height={80}
                    loading="lazy"
                    alt="service icon"
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
