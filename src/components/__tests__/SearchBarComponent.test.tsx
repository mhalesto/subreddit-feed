import { render, screen } from '@testing-library/react';
import SearchBarComponent from '../search-bar/SearchBarComponent';

describe('Search Bar Component', () => {
  it('should render correctly', () => {
    render(<SearchBarComponent
      searchTerm='aww'
      onSearchChange={jest.fn}
    />);
    const wrapper = screen.getByTestId('search-bar-wrapper');
    expect(wrapper).toBeInTheDocument();
  });

  it('should render input correctly', () => {
    render(<SearchBarComponent
      searchTerm='aww'
      onSearchChange={jest.fn}
    />);

    const searchInput: HTMLInputElement = screen.getByTestId('search-input');
    expect(searchInput).toBeEnabled();
    expect(searchInput.value).toBe('aww')
  });
})