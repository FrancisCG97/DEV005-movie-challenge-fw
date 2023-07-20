/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from './Home';

describe("Home component", () => {
    it("should render Home component correctly", () => {
      render(<Home />);
      const title = screen.getByRole("heading");
      expect(title).toBeInTheDocument();
    });
  });

