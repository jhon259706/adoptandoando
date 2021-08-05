import { render } from '@testing-library/react';
import Navbar from '@components/Navbar';

describe('Navbar', () => {
  it('renders navbar', () => {
    const { container } = render(<Navbar />);
    expect(container.firstChild.classList.contains('navbar')).toBe(true);
  });
});
