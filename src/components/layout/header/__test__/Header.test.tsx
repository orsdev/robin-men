import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen, render } from '@testing-library/react';
import { LayoutHeader } from '../Header';

describe('LayoutHeader component', () => {
  test('renders LayoutHeader', () => {
    render(<LayoutHeader />);
  });

  test('Should have Menu button', async () => {
    render(<LayoutHeader />);
    const menuButton = screen.getByLabelText('menu-button');
    expect(menuButton).toBeInTheDocument();
  });

  test('Should have report download button', async () => {
    render(<LayoutHeader />);
    const element = screen.getByLabelText('report-download');
    expect(element).toBeInTheDocument();
  });

  test('clicking on Profile Dropdown button opens the dropdown menu', async () => {
    const user = userEvent.setup();
    render(<LayoutHeader />);
    const element = screen.getByLabelText('profile-dropdown');
    expect(element).toBeInTheDocument();

    await user.click(element);

    const menuDropdown = screen.getByLabelText('profile-menu');
    expect(menuDropdown).toBeInTheDocument();
  });
});
