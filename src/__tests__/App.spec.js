import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import App from '../App'

test('renders MY PROJECTS title', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  )
  expect(getByText(/MY PROJECTS/i)).toBeInTheDocument()
})
