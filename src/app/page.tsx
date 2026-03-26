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

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <WhoWeHelp />
      <Stats />
      <Services />
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
