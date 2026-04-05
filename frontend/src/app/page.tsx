'use client';

import { useEffect } from 'react';
import { Header } from '@/components/harver/Header';
import { Hero } from '@/components/harver/Hero';
import { Stats } from '@/components/harver/Stats';
import { CoreExpertise } from '@/components/harver/CoreExpertise';
import { Technologies } from '@/components/harver/Technologies';
import { Timeline } from '@/components/harver/Timeline';
import { Leadership } from '@/components/harver/Leadership';
import { ContactForm } from '@/components/harver/ContactForm';
import { Footer } from '@/components/harver/Footer';
import Lenis from '@studio-freight/lenis';

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <CoreExpertise />
        <Technologies />
        <Timeline />
        <Leadership />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
