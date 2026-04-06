
import {HeaderPizzeria} from "../components/Header/Header.jsx"
import {SectionHero} from "../sections/Hero/Hero.jsx"
import {SectionFeatures} from "../sections/Features/Features.jsx"
import { SectionProducts } from "../sections/Products/Products.jsx"
import { VideoSection } from "../sections/VideoSection/VideoSection.jsx"
import { Contact } from "../sections/Contact/Contact.jsx"
import { Footer } from "../components/Footer/Footer.jsx"

export function HomePage(){

    return(

        <>
        
        <HeaderPizzeria />

        <main>

            <SectionHero />
            <SectionFeatures />
            <SectionProducts />
            <VideoSection />
            <Contact />

        </main>

        <Footer />

        </>

    )


}