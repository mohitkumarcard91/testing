import {render, screen} from '@testing-library/react';
import GetByLabelText from '../pages/GetByLabelText';


describe('GetByLabelText', () => {
  test('should render input associated with label', () => {
    render(<GetByLabelText />);

    const inputElement = screen.getByLabelText('Username');
    expect(inputElement).toBeInTheDocument();
  });

  test('should render div associated with label', () => {
    render(<GetByLabelText />);

    const nameElement = screen.getByLabelText('Name');
    expect(nameElement).toBeInTheDocument();
    expect(nameElement).toHaveTextContent('Mohit');
  });
}); 