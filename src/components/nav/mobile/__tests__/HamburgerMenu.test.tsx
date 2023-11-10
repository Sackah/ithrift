import React from 'react';
import { render, fireEvent, RenderResult } from '@testing-library/react';
import HamburgerMenu, { HamburgerMenuProps} from '../HamburgerMenu'; 

describe('HamburgerMenu Component', () => {
  const mockToggleMenu = jest.fn();

  const renderComponent = (props: Partial<HamburgerMenuProps> = {}): RenderResult => {
    const defaultProps: HamburgerMenuProps = {
      isDropDownActive: false,
      toggleMenu: mockToggleMenu,
      ...props,
    };

    return render(<HamburgerMenu {...defaultProps} />);
  };

  test('renders HamburgerMenu component with active dropdown', () => {
    const { container } = renderComponent({ isDropDownActive: true });

    const menuIcon = container.querySelector('.menu-icon');
    expect(menuIcon).toHaveClass('drop-down-active'); // Assert that menu icon has the 'drop-down-active' class

    fireEvent.click(menuIcon!); // Simulate a click event on the menu icon
    expect(mockToggleMenu).toBeCalled(); // Ensure that the toggle function is called when the icon is clicked
  });

  test('renders HamburgerMenu component with inactive dropdown', () => {
    const { container } = renderComponent();

    const menuIcon = container.querySelector('.menu-icon');
    expect(menuIcon).not.toHaveClass('drop-down-active'); // Ensure that menu icon does not have the 'drop-down-active' class

    fireEvent.click(menuIcon!); // Simulate a click event on the menu icon
    expect(mockToggleMenu).toBeCalled(); // Ensure that the toggle function is called when the icon is clicked
  });
});
