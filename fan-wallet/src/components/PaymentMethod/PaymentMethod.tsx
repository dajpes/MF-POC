import BankCBU from '../BankCBU/BankCBU'
import CreditCard from '../CreditCard/CreditCard'
// import styles from './paymentmethod.module.css'

export default function PaymentMethod() {
  return (
    <div>
      <BankCBU />
      <CreditCard />
    </div>
  )
}
