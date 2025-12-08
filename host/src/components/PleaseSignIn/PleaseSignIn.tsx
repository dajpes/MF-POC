import styles from './pleaseSignIn.module.css'

export default function PleaseSignIn() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Please sign in to start the ticket listing process
        </h2>
      </div>
    </div>
  )
}
