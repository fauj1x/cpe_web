import HeroSection from './components/HeroSection';
import AboutUsSection from './components/AboutUsSection';
import VisionMissionSection from './components/VisionMissionSection';
import ServicesSection from './components/ServicesSection';
import GallerySection from './components/GallerySection';
import Client from './components/ClientLogos';
import FooterSection from './components/footerSection';
import ContactUsSection from './components/ContactUsSection';
export default function Home() {
  return (
    <>
      <HeroSection id="hero" />
      <AboutUsSection id="about-us" />
      <VisionMissionSection id="vision-mission" />
      <ServicesSection id="services" />
      <GallerySection id="gallery" />
      <Client id="client" />
      <ContactUsSection id="contact-us" />
      <FooterSection />
    </>
  );
}

