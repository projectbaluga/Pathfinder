import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, test, vi } from 'vitest';
import CertDetails from '../components/CertDetails';

describe('CertDetails component', () => {
  const mockCert = {
    id: 'ccna',
    title: 'Cisco Certified Network Associate (CCNA)',
    issuer: 'Cisco',
    domain: 'Networking',
    level: 'Intermediate',
    price: 300,
    duration: '120 mins',
    questionsCount: '100-120',
    description: 'Fundamentals for IT careers and networking technologies.',
    practiceQuestions: Array(50).fill({}),
  };

  test('renders the dynamic question count correctly', () => {
    render(
      <MemoryRouter>
        <CertDetails cert={mockCert} onClose={() => {}} />
      </MemoryRouter>
    );

    expect(screen.getByText(/50 questions available/i)).toBeInTheDocument();
  });

  test('pressing Escape calls onClose', () => {
    const onClose = vi.fn();
    render(
      <MemoryRouter>
        <CertDetails cert={mockCert} onClose={onClose} />
      </MemoryRouter>
    );

    fireEvent.keyDown(window, { key: 'Escape', code: 'Escape' });
    expect(onClose).toHaveBeenCalled();
  });

  test('backdrop click calls onClose while inner panel click does not', () => {
    const onClose = vi.fn();
    render(
      <MemoryRouter>
        <CertDetails cert={mockCert} onClose={onClose} />
      </MemoryRouter>
    );

    // Inner click
    const innerPanel = screen.getByText('Cisco Certified Network Associate (CCNA)').closest('div');
    fireEvent.click(innerPanel);
    expect(onClose).not.toHaveBeenCalled();

    // Backdrop click
    const backdrop = screen.getByRole('dialog');
    fireEvent.click(backdrop);
    expect(onClose).toHaveBeenCalled();
  });
});
