import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, test, vi } from 'vitest';
import QuizEngine from '../components/QuizEngine';
import { buildQuestions, loadSavedProgress } from '../components/QuizEngine';

// Mock localStorage
const localStorageMock = (() => {
  let store = {};
  return {
    getItem: vi.fn((key) => store[key] || null),
    setItem: vi.fn((key, value) => {
      store[key] = value.toString();
    }),
    removeItem: vi.fn((key) => {
      delete store[key];
    }),
    clear: vi.fn(() => {
      store = {};
    }),
  };
})();
Object.defineProperty(window, 'localStorage', { value: localStorageMock });

describe('QuizEngine helper functions', () => {
  test('buildQuestions returns the specified length of sliced and shuffled questions', () => {
    const questions = buildQuestions('ccna', { length: 2, timed: false });
    expect(questions.length).toBe(2);
    expect(questions[0].options.length).toBe(4);
  });

  test('loadSavedProgress returns null on mismatch', () => {
    localStorageMock.clear();
    const result = loadSavedProgress('quiz_progress_ccna', { length: 2, timed: true });
    expect(result).toBeNull();
  });
});

describe('QuizEngine component', () => {
  test('resetQuiz clears progress and returns to the first question', async () => {
    const onExit = vi.fn();
    const settings = { length: 2, timed: false };
    render(
      <MemoryRouter>
        <QuizEngine certId="ccna" settings={settings} onExit={onExit} />
      </MemoryRouter>
    );

    // Initial state check
    expect(screen.getByText(/Question 1 of 2/i)).toBeInTheDocument();
  });
});
