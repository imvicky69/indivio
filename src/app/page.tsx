'use client'
import { useState, useEffect } from 'react';
import { Hero } from "@/components/sections/Hero";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { WhoWeHelp } from "@/components/sections/WhoWeHelp";
import { Stats } from "@/components/sections/Stats";
import { Services } from "@/components/sections/Services";
import CoachingManagement from "@/components/sections/CoachingManagement";
import AppExperience from "@/components/sections/AppExperience";
import { Process } from "@/components/sections/Process";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Guarantee } from "@/components/sections/Guarantee";
import { TechStack } from "@/components/sections/TechStack";
import { LatestBlogs } from "@/components/sections/LatestBlogs";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { CTA } from "@/components/sections/CTA";
import TextPressure from '@/components/TextPressure';

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Hero />
      <TrustedBy />
      <WhoWeHelp />
      <Stats />
      <Services />
      <div style={{ position: 'relative', height: '300px' }}>
        <TextPressure
          text="INDIVIO"
          flex
          alpha={false}
          stroke={false}
          width
          weight
          italic
          textColor={isDark ? "#ffffff" : "#0a0a0a"}
          strokeColor="#5227FF"
          minFontSize={36}
        />
      </div>
      <CoachingManagement />
      <AppExperience />
      <Process />
      <FeaturedProjects />
      <Guarantee />
      <TechStack />
      <LatestBlogs />
      <FAQ />
      <Contact />
      <CTA />
    </>
  );
}
