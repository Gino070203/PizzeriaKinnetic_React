
import styles from "../styles/headerPizzeria.module.css"

export function HeaderPizzeria(){

    return(

        <header className={styles.header}>
            
            <div>

                <a href="">🍕 Pizzeria Kinnetic</a>

                <nav>

                    <ul>

                        <li><a href="">Inicio</a></li>
                        <li><a href="">Menu</a></li>
                        <li><a href="">Video</a></li>
                        <li><a href="">Contacto</a></li>

                    </ul>

                </nav>

            </div>

        </header>

    )

}