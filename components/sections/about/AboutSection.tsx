import { Tabs } from '@/components/ui'
import AboutMeTab from './AboutMeTab'
import SkillsTab from './SkillsTab'
import AchievementsTab from './AchievementsTab'

const aboutTabs = [
  { key: 'about', title: 'About Me', content: <AboutMeTab /> },
  { key: 'skillset', title: 'Skillsets', content: <SkillsTab /> },
  { key: 'awward', title: 'Achievements', content: <AchievementsTab /> },
]

export default function AboutSection() {
  return (
    <section className="section about" aria-label="about-me" id="about">
      <div className="container">
        <Tabs items={aboutTabs} />
      </div>
    </section>
  )
}
