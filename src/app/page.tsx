import Hero from '@/components/Hero'
import FeatureShowcase from '@/components/FeatureShowcase'
import BulletPointsSection from '@/components/BulletPointsSection'
import MotorcycleHeroSection from '@/components/MotorCycleHeroSection'
import ClientLogosSection from '@/components/ClientLogosSection'
import ContentCardsSection from '@/components/ContentCardSection'
import MusicStudioHeroSection from '@/components/MusicalStudioHeroSection'
import RequestQuoteForm from '@/components/RequestQuoteForm'
import AppDownloadSection from '@/components/AppDownloadSection'
import ContactUsSection from '@/components/MotocycleGallerySection'
import FeaturesWithImageSection from '@/components/FeaturesWithImageSection'
import Testimonials from '@/components/Testimonials'
import TabbedContentSection from '@/components/TabbedContentSection'
import ScooterFeaturesSection from '@/components/ScooterFeaturesSection'
import FeaturedStorySection from '@/components/FeaturedStorySection'
import FAQ from '@/components/FAQ'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureShowcase />
      <BulletPointsSection />
      <MotorcycleHeroSection />
      <ClientLogosSection />
      <ContentCardsSection />
      <MusicStudioHeroSection />
      <RequestQuoteForm />
      <AppDownloadSection />
      <ContactUsSection />
      <FeaturesWithImageSection />
      <Testimonials />
      <TabbedContentSection />
      <ScooterFeaturesSection />
      <FeaturedStorySection />
      <FAQ />
      <CTASection />
      <Footer />
    </>
  )
}
