import Link from 'next/link'
import { Button } from '@/components/ui/button'
import HeroSection from './HeroSection'
import FormAndWhyChooseUs from './FormAndWhyChooseUs'
import AboutAntares from './AboutAntares'
import DiscountSlider from './DiscountSlider'
import StatisticsSection from './StatisticsSection'
import LuxuryGallerySection from './LuxuryGallerySection'
import BeachPartiesSection from './BeachPartiesSection'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Link href="/booking">
         <Button>Book Now</Button>
      </Link>
      <FormAndWhyChooseUs />
      <AboutAntares />
      <DiscountSlider />
      <StatisticsSection />
      <LuxuryGallerySection />
      <BeachPartiesSection />
    </main>
  );
}
