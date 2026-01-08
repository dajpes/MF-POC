import styles from './creditcard.module.css'

type CardInfo = {
  number: string
  holder: string
  expiry: string
}

export default function CreditCard() {
  // Mock card data
  const card: CardInfo = {
    number: '•••• •••• •••• 4242',
    holder: 'Damian Perez',
    expiry: '12/26',
  }

  return (
    <section className={styles.card} aria-label="Credit Card">
      <div className={styles.cardNumber}>{card.number}</div>

      <div className={styles.cardDetails}>
        <div className={styles.detailItem}>
          <span className={styles.label}>Card Holder</span>
          <span className={styles.value}>{card.holder}</span>
        </div>

        <div className={styles.detailItem}>
          <span className={styles.label}>Expires</span>
          <span className={styles.value}>{card.expiry}</span>
        </div>
      </div>
    </section>
  )
}
