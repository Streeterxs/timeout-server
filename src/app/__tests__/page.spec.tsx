/**
 * @jest-environment jsdom
 */
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from '../page';

it('Should render README as default home page', () => {
  render(<Page/>);

  const renderedReadme = screen.getByText('Timeout Server');

  expect(renderedReadme).toBeTruthy()
});
