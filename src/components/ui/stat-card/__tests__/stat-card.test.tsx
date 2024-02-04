import { render, screen } from '@testing-library/react';
import { StatCard } from '../../stat-card';

describe('StatCard', () => {
  const StatProps = {
    label: 'Users online',
    value: 207,
    remaining_bytes: '500',
    is_bytes: true
  };

  test('should render a component', () => {
    render(<StatCard {...StatProps} />);
    const component = screen.getByTestId('stat_card');
    expect(component).toBeInTheDocument();
  });

  test('renders with correct label', () => {
    render(<StatCard {...StatProps} />);
    const labelElement = screen.getByRole('paragraph');

    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toHaveTextContent(StatProps.label);
  });

  test('renders value with remaining bytes', () => {
    render(<StatCard {...StatProps} />);

    const element = screen.getByRole('heading');
    expect(element).toBeInTheDocument();
    expect(element.textContent?.length).toBeGreaterThan(0);
  });

  test('renders correct value if `is_bytes` is false', () => {
    render(<StatCard {...StatProps} />);

    const element = screen.getByRole('heading');
    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent(StatProps.value.toString());
  });
});
