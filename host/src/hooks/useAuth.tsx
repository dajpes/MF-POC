import { createContext, useContext, useState } from 'react'
import type { User } from './authSchema'

type AuthContextValue = {
  user: User | null
  signIn: (u: User) => { isSuccess: boolean; isError: boolean }
  signOut: () => void
  isAuthenticated: boolean
}

const STORAGE_KEY = 'fanwallet_user'

export const AuthContext = createContext<AuthContextValue | undefined>(
  undefined,
)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      return raw ? (JSON.parse(raw) as User) : null
    } catch {
      return null
    }
  })

  const signIn = (u: User) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(u))
      setUser(u)
      return {
        isSuccess: true,
        isError: false,
      }
    } catch (e) {
      // biome-ignore lint/suspicious/noConsole: intentional error logging
      console.error('Failed to write user to localStorage', e)
      return {
        isSuccess: false,
        isError: true,
      }
    }
  }

  const signOut = () => {
    setUser(null)
    try {
      localStorage.removeItem(STORAGE_KEY)
    } catch (e) {
      // biome-ignore lint/suspicious/noConsole: intentional error logging
      console.error('Failed to remove user from localStorage', e)
    }
  }

  const value = { user, signIn, signOut, isAuthenticated: Boolean(user) }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('No Auth context provided')
  }
  return context
}
