import { render, screen } from '@testing-library/react';
import LoaderComponent from '../loader/LoaderComponent';

describe('Loader Component', () => {
  it('should render correctly', () => {
    render(<LoaderComponent/>);

    const wrapper = screen.getByTestId('loader-wrapper');
    expect(wrapper).toBeInTheDocument();
    expect(wrapper).toBeVisible();
  })

  it('has loader image', () => {
    render(<LoaderComponent/>);

    const loaderImg: HTMLImageElement = screen.getByAltText('loader-img');
    expect(loaderImg).toBeInTheDocument();
    expect(loaderImg.src).toBe('http://localhost/loader.gif');
    expect(loaderImg).toBeVisible();
  });
})