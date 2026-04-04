
import styleHero from "./sectionHero.module.css"

export function SectionHero(){

    return(
        <section className={styleHero.hero}>

            <div className={`${styleHero.containerInformation}`}>

                <div className={styleHero.presentation}>

                    <h1>¡La mejor pizzeria de Villa Salvador!</h1>
                    <h3>Ven y disfruta una momento unico</h3>

                </div>


                <div className={styleHero.containerButtons}>

                    <a href="">Ver menu</a>
                    
                    <a href="">Reservar</a>

                </div>


            </div>


        </section>
    )

}