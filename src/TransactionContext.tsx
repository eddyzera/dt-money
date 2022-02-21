import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from './services/api'

interface Transaction {
  id: number,
  title: string,
  amount: number,
  type: string,
  category: string,
  createdAt: string
}


interface TransactionProviderProps {
  children: ReactNode
}

export const TransactionContext = createContext<Array<Transaction>>([])

export const TransactionProvider = ({ children }: TransactionProviderProps) => {
  const [transactions, setTransactions] = useState<Array<Transaction>>([])

  useEffect(() => {
    api.get('transactions')
      .then(({data}) => setTransactions(data.transactions))
  }, [])

  return (
    <TransactionContext.Provider value={transactions}>
      { children }
    </TransactionContext.Provider>
  )
}