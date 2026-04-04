
import styleFeatures from "./sectionFeatures.module.css"

export function SectionFeatures(){

    return(
    
    <section className={styleFeatures.features}>

        <div className={`container ${styleFeatures.featuresGrid}`}>

            <article className={styleFeatures.featureCard}>

                <h2>Masa y textura de excelencia</h2>
                <p>Pizzas de sabores unicos, los cuales no encuentras
                    en otro lugar.</p>

            </article>

            <article className={styleFeatures.featureCard}>

                <h2>Ingredientes de primera</h2>
                <p>Nuestras pizzas son realizados con ingredientes
                    de excelencia.</p>

            </article>

            <article className={styleFeatures.featureCard}>

                <h2>Ambiente acogedor</h2>
                <p>Espacios comodos donde podras disfrutar momentos inolvidables.</p>

            </article>

        </div>

    </section>)
}