import {WorkExperience} from '../components/pages/home/experience'
import {HeroSection} from '../components/pages/home/hero-section'
import {KnownTechs} from '../components/pages/home/known-techs'


export default function Index() {
    return (
        <>
            <HeroSection />
            <KnownTechs />
            <WorkExperience />
        </>
    )
}