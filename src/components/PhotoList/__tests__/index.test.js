import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import PhotoList from '../'

afterEach(cleanup)

describe('PhotoList is rendering', () => {
  it('renders', () => {
    render(<PhotoList />);
  });

  it('matches the snapshot', () => {
    const { asFragment } = render(<PhotoList />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders a category', () => {
    const { asFragment } = render(<PhotoList category="commercial" />);
    expect(asFragment()).toMatchSnapshot();
  })
});
