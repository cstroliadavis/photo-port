import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

afterEach(cleanup);

describe('ContactForm component', () => {
  it('renders', () => {
    render(<ContactForm />);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<ContactForm />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('shows Contact Me in the title', () => {
    const { getByTestId } = render(<ContactForm />);

    expect(getByTestId('h1tag')).toHaveTextContent('Contact me');
  });

  it('has a submit button', () => {
    const { getByTestId } = render(<ContactForm />);

    expect(getByTestId('submit-button')).toHaveTextContent('Submit');
  });
});
