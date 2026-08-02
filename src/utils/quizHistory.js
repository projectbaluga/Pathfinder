const STORAGE_KEY = 'pathfinder_quiz_history';

export const getQuizHistory = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error('Failed to get quiz history', e);
    return [];
  }
};

export const addQuizResult = (result) => {
  try {
    const history = getQuizHistory();
    const newRecord = {
      ...result,
      completedAt: result.completedAt || new Date().toISOString(),
    };
    history.push(newRecord);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
    return history;
  } catch (e) {
    console.error('Failed to save quiz result', e);
    return [];
  }
};

export const clearQuizHistory = () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
    return true;
  } catch (e) {
    console.error('Failed to clear quiz history', e);
    return false;
  }
};
