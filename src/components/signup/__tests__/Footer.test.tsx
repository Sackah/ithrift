import React from 'react';
import {render, screen} from '@testing-library/react'
import Footer from '../Footer';


describe('Footer Components', () => {
    it('renders the copyright notice for Team Innova8', () => {
        const { getByText } = render(<Footer />);
        const copyrightText = screen.getByTestId("footer-copyright" );

        expect(copyrightText).toBeInTheDocument();
    });

});