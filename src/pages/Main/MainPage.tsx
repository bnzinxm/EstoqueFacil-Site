import React, { useState, useEffect } from 'react';
import { Header } from '../../components/Header';
import { Banner } from '../../components/Banner';
import { StatsSection } from '../../components/StatsSection';
import { FeaturedCategories } from '../../components/FeaturedCategories';
import { ProviderGrid } from '../../components/ProviderGrid';
import { TestimonialsSection } from '../../components/TestimonialsSection';
import { ProviderCTA } from '../../components/ProviderCTA';
import { Footer } from '../../components/Footer';
import { ThemeProvider } from '../../contexts/ThemeContext';

function MainPage() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 overflow-hidden">
        <Header />
        <main>
          <Banner />
          <StatsSection />
          <FeaturedCategories />
          <ProviderGrid />
          <TestimonialsSection />
          <ProviderCTA />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default MainPage;