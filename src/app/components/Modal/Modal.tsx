import styles from './modal.module.css'

const Modal = () => {
    return (
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                <h1>Gracias por tu mensaje</h1>
                <p>Me pondre en contacto contigo a la brevedad</p>
            </div>
        </div>
    )
}

export default Modal