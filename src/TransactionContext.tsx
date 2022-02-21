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

interface TransactionsContextData {
  transactions: Array<Transaction>
  createTransaction: (transaction: TransactionInput) => void
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

export const TransactionContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
)

export const TransactionProvider = ({ children }: TransactionProviderProps) => {
  const [transactions, setTransactions] = useState<Array<Transaction>>([])

  useEffect(() => {
    api.get('transactions')
      .then(({data}) => setTransactions(data.transactions))
  }, [])

  const createTransaction = (transaction: TransactionInput) => {
    
    api.post('/transactions', transaction)
  }

  return (
    <TransactionContext.Provider value={{transactions, createTransaction}}>
      { children }
    </TransactionContext.Provider>
  )
}