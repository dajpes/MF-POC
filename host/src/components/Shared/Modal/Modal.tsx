import { createPortal } from 'react-dom'
import styles from './modal.module.css'
interface Props {
  onClose: () => void
  children: React.ReactNode
}

import { useEffect } from 'react'

export default function Modal({ onClose, children }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  return createPortal(
    <div className={styles.wrapper} onClick={onClose} onKeyUp={() => {}}>
      <dialog
        open
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
        onKeyUp={() => {}}
      >
        {children}
      </dialog>
    </div>,
    document.body,
  )
}
