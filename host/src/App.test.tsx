import { render } from '@testing-library/react'
import { describe, it } from 'vitest'
import App from './App'

describe('Host App', () => {
  it('renders without crashing', () => {
    render(<App />)
  })
})
