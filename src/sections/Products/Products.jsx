import styles from "./sectionProducts.module.css"
import { ProductCard } from "../../components/ProductCard/ProductCard.jsx"
import americanaImg from "../../imgs/Americana.jpg"
import lasagñaImg from "../../imgs/Lasagña.png"
import pizzaXtraImg from "../../imgs/PizzaXtra.jpg"
import pizzaVegImg from "../../imgs/PizzaVegetariana.jpg"
import pizzaVeganImg from "../../imgs/PizzaVegan.jpg"
import panAjoImg from "../../imgs/PanAjo.jpg"


export function SectionProducts(){

return(
    <section className="products section">

        <div className="container">

            <div class="sectionTitle">

                <span>Nuestro menú</span>
                <h2>Productos destacados</h2>
                <p>Disfruta nuestras pizzas y acompañamientos favoritos</p>

            </div>

            <div className={styles.productsGrid}>

                <ProductCard  
                urlImg={americanaImg} 
                namePizza={'Pizza Americana'} 
                description={'Pizza clasica con bastante queso y jamon, ideal para la familia'}
                price={'20.00'}
                />

                <ProductCard  
                urlImg={pizzaXtraImg} 
                namePizza={'Pizza Xtra'} 
                description={'Pizza Xtra de 4 sabores, ideal para la familia'}
                price={'50.00'}
                />

                <ProductCard  
                urlImg={pizzaVegImg} 
                namePizza={'Pizza Vegetariana'} 
                description={'Pizza Vegetariana con aceituna,cebolla y carne'}
                price={'25.00'}
                />

                <ProductCard  
                urlImg={pizzaVeganImg} 
                namePizza={'Pizza Vegan'} 
                description={'Pizza Vegan con aceituna,albahaca y jamon'}
                price={'30.00'}
                />


                <ProductCard  
                urlImg={lasagñaImg} 
                namePizza={'Lasagña '} 
                description={'Lasagña con bisteck molido y salsa blanca'}
                price={'20.00'}
                />

                <ProductCard  
                urlImg={panAjoImg} 
                namePizza={'Pan al ajo'} 
                description={'Pan delicioso para acompañar con los amigos'}
                price={'8.00'}
                />


            </div>




        </div>

        



    </section>
)    

}