// import { WorkExperience } from './components/pages/home/experience'
// import { HeroSection } from './components/pages/home/hero-section'
// import { KnownTeachs } from './components/pages/home/known-techs'
//
// export default async function Home() {
//   return (
//     <>
//       <HeroSection />
//       <KnownTeachs />
//       <WorkExperience />
//     </>
//   )
// }

import {redirect} from "next/navigation";

export default function Home() {
  return (
      redirect('/pt-BR')
  );
}