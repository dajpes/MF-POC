import { useState } from 'react'
import useAuth from '../../hooks/useAuth'
import AccountMenu from '../AccountMenu/AccountMenu'
import Button from '../Shared/Button'
import SignInModal from '../SignInModal/SignInModal'
import styles from './header.module.css'

export default function Header() {
  const [showModal, setShowModal] = useState(false)
  const { isAuthenticated } = useAuth()
  return (
    <>
      <header className={styles.header}>
        <h1>Fan Wallet</h1>
        <ul className={styles.nav}>
          {isAuthenticated ? (
            <li>
              <AccountMenu />
            </li>
          ) : (
            <li>
              <Button
                unstyled
                onClick={() => setShowModal(true)}
                className={styles.button}
              >
                Sign in
              </Button>
            </li>
          )}
        </ul>
      </header>
      {showModal && <SignInModal onDismiss={() => setShowModal(false)} />}
    </>
  )
}
