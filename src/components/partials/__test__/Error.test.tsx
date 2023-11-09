import React from 'react';
import { render } from '@testing-library/react';
import Error from '../Error';

describe('Error Component', () => {
  it('renders error message correctly', () => {
    const errorMessage = 'An error occurred!';
    const { getByText } = render(<Error message={errorMessage} />);
    const errorElement = getByText(errorMessage);

    expect(errorElement).toBeInTheDocument();
  });
});
