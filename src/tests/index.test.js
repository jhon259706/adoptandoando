import { render } from '@testing-library/react';
import Home from '@pages/index';

describe('Home', () => {
  it('renders home', () => {
    const { container } = render(<Home />);
    expect(container.querySelector('#title')).toHaveTextContent('Chempopet');
  });
});
