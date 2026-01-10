import Hero from '@/components/Hero'
import DailySpecials from '@/components/DailySpecials'
import FoodGallery from '@/components/FoodGallery'
import Menu from '@/components/Menu'
import OurStory from '@/components/OurStory'
import Contact from '@/components/Contact'
import GlobalAlertBanner from '@/components/GlobalAlertBanner'
import globalAlert from '../data/global_alert.json'

export default function Home() {
  return (
    <>
      <GlobalAlertBanner alert={globalAlert} />
      <Hero />
      <DailySpecials />
      <FoodGallery />
      <Menu />
      <OurStory />
      <Contact />
    </>
  )
}
