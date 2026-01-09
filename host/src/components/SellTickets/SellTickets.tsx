import FanWallet from 'FanWallet/FanWallet'
import { useEffect, useState } from 'react'
import useAuth from '../../hooks/useAuth.tsx'
import PleaseSignIn from '../PleaseSignIn/PleaseSignIn.tsx'
import TicketSelection from './TicketSelection.tsx'
import styles from './selltickets.module.css'

export default function SellTickets() {
  const { isAuthenticated } = useAuth()
  const [tickets, setTickets] = useState([])
  const [ticketsSelected, setTicketsSelected] = useState<number[]>([])
  const [displayPaymentMethod, setDisplayPaymentMethod] = useState(false)

  const onTicketSelectedHandler = (id: number) => {
    setTicketsSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    )
    setDisplayPaymentMethod(false)
  }

  useEffect(() => {
    if (!isAuthenticated) return

    const getTickets = async () => {
      const ticketsResponse = await fetch('api/tickets.json')
      const tickets = await ticketsResponse.json()
      if (!tickets) return

      setTickets(tickets)
    }

    getTickets()
  }, [isAuthenticated])

  if (!isAuthenticated) {
    return <PleaseSignIn />
  }

  if (!tickets.length) {
    return <p className={styles.noTicketsfound}>No tickets found.</p>
    console.log('🚀 ~ tickets:', tickets)

  }

  return (
    <div className={styles.wrapper}>
      <TicketSelection
        tickets={tickets}
        ticketsSelected={ticketsSelected}
        onTicketSelected={onTicketSelectedHandler}
        onContinue={() => setDisplayPaymentMethod(true)}
      />
      {displayPaymentMethod && ticketsSelected.length > 0 && (
        <div className={styles.paymentMethod}>
          <FanWallet />
        </div>
      )}
      <div className={styles.listingComplete}>
        <p>Create Listing</p>
      </div>
    </div>
  )
}
