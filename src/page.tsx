import Link from 'next/link'
import { Button } from '@/components/ui/button'
import HeroSection from './HeroSection'


export default function Home() {
  return (
    <main>
      <HeroSection />
      <Link href="/booking">
         <Button>Book Now</Button>
      </Link>
    </main>
  );
}
