import { render, screen } from '@testing-library/react';
import Home from '../pages/Home';  // Adjust the path according to your file structure
import '@testing-library/jest-dom';

// Optional: Mock the Hero component if it involves complex logic or external dependencies
jest.mock("../components/Hero", () => () => <div data-testid="hero">Hero Component</div>);

describe('Home component', () => {
  it('renders the Hero component', () => {
    render(<Home />);
    const heroElement = screen.getByTestId('hero');
    expect(heroElement).toBeInTheDocument();
  });
});
