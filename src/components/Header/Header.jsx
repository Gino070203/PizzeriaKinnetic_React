
import styles from "./headerPizzeria.module.css"

export function HeaderPizzeria(){

    return(

        <header className={styles.header}>
            
            <div className={`container  ${styles.navContainer}`}>

                <a href="">🍕 Pizzeria Kinnetic</a>

                <nav className={styles.nav}>

                    <ul className={styles.navList}>

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