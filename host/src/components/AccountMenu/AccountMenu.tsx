import { useState } from 'react'
import useAuth from '../../hooks/useAuth'
import Button from '../Shared/Button'
import styles from './AccountMenu.module.css'

export default function AccountMenu() {
  const { signOut } = useAuth()
  const [showMenu, setShowMenu] = useState(false)
  return (
    <div className={styles.wrapper}>
      <Button onClick={() => setShowMenu(!showMenu)} unstyled>
        Account
      </Button>
      {showMenu && (
        <div className={styles.menuWrapper}>
          <ul className={styles.list}>
            <li>Settings</li>
            <li>
              <Button
                onClick={() => {
                  signOut()
                  setShowMenu(false)
                }}
                unstyled
              >
                Sign Out
              </Button>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}
