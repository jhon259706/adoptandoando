import Home from '@pages/index';
import { render } from '@tests/test-utils';

describe('Home', () => {
  it('renders home', () => {
    const { container, asFragment } = render(<Home />);
    expect(asFragment()).toMatchSnapshot();
    expect(container.querySelector('#title')).toHaveTextContent('Chempopet');
  });
});
