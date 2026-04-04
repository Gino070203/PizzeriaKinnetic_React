
import styles from "./Contact.module.css"
import { ContactForm } from "../../components/ContactForm/ContactForm.jsx"

export function Contact(){

    return(

        <section className="contact section">

            <div className={`container ${styles.contactGrid}`}>

                <div className="contactInfo">

                    <span>Contacto</span>
                    <h2>Haz tu consulta o reserva</h2>
                    <p>
                        Escríbenos para reservar una mesa, consultar promociones o pedir
                        información sobre nuestros productos.
                    </p>


                    <ul class={styles.contactList}>

                        <li><strong>Teléfono : </strong> +51 941 251 321</li>
                        <li><strong>Correo :</strong> contacto@pizzaKinnetix.com</li>
                        <li><strong>Ubicacion :</strong> Av. Velazco 1445, Lima </li>
                        <li><strong>Horario:</strong> Lunes a Domingo, 6:00 p.m. - 12:00 p.m.</li>

                    </ul>

                </div>

                <ContactForm />

            </div>

        </section>

    )

}