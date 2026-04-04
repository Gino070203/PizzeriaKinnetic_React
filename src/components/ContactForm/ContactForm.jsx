
import styles from "./ContactForm.module.css"

export function ContactForm(){

    return(
        <form className={styles.ContactForm}>

            <div class={styles.formGroup}>
                <label for="nombre">Nombre</label>
                <input type="text" id="nombre" name="nombre" placeholder="Tu nombre" required />
            </div>

            <div class={styles.formGroup}>
                <label for="telefono">Telefono</label>
                <input type="tel" id="telefono" name="telefono" placeholder="Tu telefono" required />
            </div>

            <div class={styles.formGroup}>
                <label for="email">Correo</label>
                <input type="email" id="email" name="email" placeholder="Tu correo" required />
            </div>

            <div class={styles.formGroup}>
                <label for="fecha">Fecha de reserva</label>
                <input type="date" id="fecha" name="fecha" />
            </div>

            <div class={`${styles.formGroup} ${styles.fullWidth}`}>
                <label for="mensaje">Mensaje</label>
                <textarea id="mensaje" name="mensaje" rows="5" placeholder="Escribe tu consulta o reserva"></textarea>
            </div>

            <div class={`${styles.formGroup} ${styles.fullWidth}`}>
                <button type="submit" class="btn btn-primary">Enviar mensaje</button>
            </div>


        </form>

    )
}