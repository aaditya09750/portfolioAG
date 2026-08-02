import Image from 'next/image'
import { certs } from '@/data/constants'

export default function AchievementsTab() {
  return (
    <>
      <h3 className="h4 title section-title">My Achievements.</h3>
      <ul className="grid-list">
        {certs.map(({ src, alt }) => (
          <li key={src}>
            <div className="award-card">
              <figure
                className="card-banner img-holder"
                style={{ '--width': '534', '--height': '383' } as React.CSSProperties}
                data-tilt
              >
                <Image src={src} width={534} height={383} alt={alt} className="img-cover" />
              </figure>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}
