import React from 'react';
import { render } from '@testing-library/react';
import Loading from '../Loading';

describe('Loading Component', () => {
  it('renders a loading spinner', () => {
    const { container } = render(<Loading />);
    const loadingDiv = container.querySelector('.loading-page');
    const spinnerIcon = container.querySelector('.fa-spinner'); 
    
    expect(loadingDiv).toBeInTheDocument(); // Check if the loading container is rendered
    expect(spinnerIcon).toBeInTheDocument(); // Check if the spinner icon is present
  });
});
