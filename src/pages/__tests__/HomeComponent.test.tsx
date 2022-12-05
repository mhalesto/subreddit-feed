import { render, screen } from '@testing-library/react';
import HomeComponent from '../home/HomeComponent';

describe('Home Component', () => {
  it('should render correctly', () => {
    render(<HomeComponent />);

    const wrapper = screen.getByTestId('home-component');
    expect(wrapper).toBeInTheDocument();
  });
});