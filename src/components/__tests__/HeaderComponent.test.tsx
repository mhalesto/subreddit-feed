import { render, screen } from '@testing-library/react';
import HeaderComponent from '../header/HeaderComponent';

describe('Header Component', () => {
  it('should render corretly', () => {
    render(
      <HeaderComponent
        logo='../../assets/imgs/reddit-logo.png'
      />);

    const wrapper = screen.getByTestId('header-component-wrapper');
    expect(wrapper).toBeInTheDocument();
  });

  it('should contain title', () => {
    render(
      <HeaderComponent
        logo='../../assets/imgs/reddit-logo.png'
        title='title example'
      />);

    const title = screen.getByText('title example');
    expect(title).toBeInTheDocument();
  });

  it('should contain logo', () => {
    render(
      <HeaderComponent
        logo='../../assets/imgs/reddit-logo.png'
        title='title example'
      />);

      expect(screen.getByAltText('logo')).toBeInTheDocument();
  });
})