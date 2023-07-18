/* eslint-disable no-unused-vars */
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

// test('renderiza correctamente', () => {
//   const { getByText } = render(< />);
//   const titulo = getByText('Moviefy');

//   expect(titulo).toBeInTheDocument();
// });



//   // ARRANGE

//   // ACT
//   const inputNode = screen.getByPlaceholderText("¿Qué película buscas?");
//   await userEvent.click(screen.getByText('Moviefy'))
//   await screen.findByRole('navbar-brand h1')

//   // ASSERT
//   expect(screen.getByRole('navbar-brand h1')).toHaveTextContent('Moviefy')
//   expect(screen.getByRole('button')).toBeDisabled()
// test('Pregunta por la película que buscas', () => {
//   render(<Search />)
//   const inputNode = screen.getByPlaceholderText("¿Qué película buscas?");
//   expect(inputNode).toBeInTheDocument();
// })