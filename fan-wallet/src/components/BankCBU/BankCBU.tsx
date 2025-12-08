import { useEffect, useState } from 'react'
import styles from './BankCBU.module.css'

type BankCBUType = {
  bankName: string
  cbu: string
  alias?: string
  currency?: string
}

export default function BankCBU() {
  const [bankCBU, setBankCBU] = useState<BankCBUType | null>(null)
  useEffect(() => {
    if (bankCBU) return
    const getBankCbuDetails = async () => {
      const fetchBankCBUResponse = await fetch('/api/bank-cbu.json')
      const bankCBUData = await fetchBankCBUResponse.json()
      if (bankCBUData) {
        setBankCBU(bankCBUData)
      }
    }
    getBankCbuDetails()
  }, [bankCBU])

  if (!bankCBU) return <p>No bank CBU configured</p>

  return (
    <div className={styles.card}>
      <h4 className={styles.heading}>{bankCBU.bankName}</h4>

      <div className={styles.cbuRow}>
        <div>
          <div className={styles.cbuValue}>{bankCBU.cbu}</div>
          {bankCBU.alias && (
            <div className={styles.alias}>Alias: {bankCBU.alias}</div>
          )}
        </div>
      </div>
    </div>
  )
}
