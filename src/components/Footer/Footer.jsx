
import styles from "./Footer.module.css"
import { Facebook } from "../../Assets/Icons/Facebook.jsx";
import { Instagram } from "../../Assets/Icons/Instangram.jsx";
import { YouTube } from "../../Assets/Icons/Youtube.jsx";
import { WhatsApp } from "../../Assets/Icons/WhatsApp.jsx";

export function Footer(){


    return(

        <footer className={styles.footer}>

        <div className={`container ${styles.footerGrid}`}>

            <div>
                <h3>🍕 Pizzeria Kinnetic</h3>
                <p>Sabores unicos,momentos inolvidables</p>
            </div>


            <div>

                <h4>Redes sociales</h4>

                <ul className={styles.footerLinks}>

                    <li className={styles.iconSocial}>

                        <Facebook className={styles.icon} />
                        <a href="">Facebook</a>
                        
                    </li>

                    <li className={styles.iconSocial}>

                        <Instagram className={styles.icon} />
                        <a href="">Instangram</a>
                        
                    </li>

                    <li className={styles.iconSocial}>

                        <YouTube className={styles.icon} />
                        <a href="">YouTube</a>
                        
                    </li>

                    <li className={styles.iconSocial}>

                        <WhatsApp className={styles.icon} />
                        <a href="">WhatsApp</a>
                        
                    </li>

                </ul>


            </div>

            <div>
                <h4>📞Contacto</h4>
                <p>+51 916 125 144</p>
                <p>contacto@PizzaKinnetic.com</p>
            </div>


        </div>


        <div class={styles.footerBottom}>
            <p>&copy;2026 Pizzeria Kinnetic. Todos los derechos reservados</p>
        </div>

        </footer>
    )

}


  
    
  
  
    
  
  