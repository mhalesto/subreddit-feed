import { render, screen } from '@testing-library/react';
import SortByComponent from '../sort-by/SortByComponent';

describe('Sort By Component', () => {
  it('should render correctly', () => {
    render(<SortByComponent
      sortBy='hot'
      handleSortBy={jest.fn}
    />)

    const wrapper = screen.getByTestId('sort-by-wrapper');
    expect(wrapper).toBeInTheDocument();
  });

  it('should render select', () => {
    render(<SortByComponent 
      sortBy='hot'
      handleSortBy={jest.fn}
    />)

    const selectOptions: any = screen.getAllByRole('option');
    expect(selectOptions.length).toEqual(3);

    const optionHot: any = screen.getByDisplayValue('Hot')
    expect(optionHot.value).toEqual('hot');

    const optionNew: any = screen.getByTestId('sort-by-new')
    expect(optionNew.value).toEqual('new');
    
    const optionTop: any = screen.getByTestId('sort-by-top')
    expect(optionTop.value).toEqual('top');

  });
})