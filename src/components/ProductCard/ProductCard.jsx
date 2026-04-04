
import styles from "./ProductCard.module.css"


export function ProductCard({urlImg, namePizza,description, price}){


    return(

        <article className={styles.productCard}>

            <img src={urlImg} alt={namePizza} />

            <div class={styles.productInfo}>

                <h3>{namePizza}</h3>
                <p>{description}</p>
                <span class={styles.price} >S/ {price}</span>
    
            </div>



        </article>
    )

}