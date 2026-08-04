import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, test } from 'vitest';
import Directory from '../pages/Directory';

describe('Directory page filtering', () => {
  test('filtering by search term and domain narrows down certifications', () => {
    render(
      <MemoryRouter>
        <Directory />
      </MemoryRouter>
    );

    // Initial load has several cards
    const initialCards = screen.getAllByRole('button', { name: /View details for/i });
    expect(initialCards.length).toBeGreaterThan(0);

    // Filter by search term
    const searchInput = screen.getByPlaceholderText(/Search certifications or issuers/i);
    fireEvent.change(searchInput, { target: { value: 'AWS' } });

    // Ensure all remaining contain AWS
    const filteredCards = screen.getAllByRole('button', { name: /View details for/i });
    expect(filteredCards.length).toBeLessThan(initialCards.length);
    filteredCards.forEach((card) => {
      expect(card.textContent).toContain('AWS');
    });
  });
});
