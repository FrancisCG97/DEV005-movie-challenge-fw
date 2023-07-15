/* eslint-disable no-unused-vars */
import React from 'react'
import {render, screen, test, expect} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Home from './Home' 

test('loads and displays greeting', async () => {
  // ARRANGE
  render(<Home url="/greeting" />)

  // ACT
  await userEvent.click(screen.getByText('Load Greeting'))
  await screen.findByRole('heading')

  // ASSERT
  expect(screen.getByRole('heading')).toHaveTextContent('hello there')
  expect(screen.getByRole('button')).toBeDisabled()
})
