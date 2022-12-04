import { render } from '@testing-library/react';
import HomeComponent from '../home/HomeComponent';

describe('Home Component', () => {
  it('should render correctly', () => {
     render(<HomeComponent />);
  });
});