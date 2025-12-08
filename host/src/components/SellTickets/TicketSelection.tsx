import Button from '../Shared/Button'
import styles from './selltickets.module.css'

type Tickets = {
  id: number
  section: string
  row: string
  seat: string
}

interface Props {
  tickets: Tickets[]
  ticketsSelected: number[]
  onTicketSelected: (id: number) => void
  onContinue: () => void
}

export default function TicketSelection({
  tickets,
  ticketsSelected,
  onTicketSelected,
  onContinue,
}: Props) {
  const totalSelected = ticketsSelected.length

  return (
    <div className={styles.ticketSelection}>
      <h2 className={styles.ticketSelectionTitle}>Select Tickets</h2>
      {tickets.map(({ id, section, row, seat }) => {
        const isChecked = ticketsSelected.includes(id)
        return (
          <label className={styles.ticketLabel} key={id}>
            <input
              type="checkbox"
              name={`ticket-${id}`}
              checked={isChecked}
              onChange={() => onTicketSelected(id)}
              aria-checked={isChecked}
            />
            <dl className={styles.ticketWrapper}>
              <dt className={`${styles.section} ${styles.baseTerm}`}>SEC</dt>
              <dd className={styles.sectionValue}>{section}</dd>

              <dt className={`${styles.row} ${styles.baseTerm}`}>ROW</dt>
              <dd className={styles.rowValue}>{row}</dd>

              <dt className={`${styles.seat} ${styles.baseTerm}`}>SEAT</dt>
              <dd className={styles.seatValue}>{seat}</dd>
            </dl>
          </label>
        )
      })}

      <Button
        type="button"
        disabled={totalSelected === 0}
        className={styles.continueButton}
        unstyled
        onClick={onContinue}
      >
        Continue
      </Button>
    </div>
  )
}
