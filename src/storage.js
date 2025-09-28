// A few initial ideas for the first load
const INITIAL_IDEAS = [
  {
    id: '1',
    description: 'Open-world survival game on a sentient planet.',
    upvotes: 12,
    downvotes: 3,
  },
  {
    id: '2',
    description:
      'Co-op puzzle game where players are shapeshifting detectives.',
    upvotes: 8,
    downvotes: 1,
  },
  {
    id: '3',
    description: 'A rhythm game controlled entirely by breathing patterns.',
    upvotes: 5,
    downvotes: 7,
  },
];

const IDEAS_STORAGE_KEY = 'gameIdeas';
const VOTES_STORAGE_KEY = 'userVotes';

/**
 * Loads data from Local Storage.
 */
export const loadFromLocalStorage = (key, defaultValue) => {
  try {
    const serializedData = localStorage.getItem(key);
    if (serializedData === null) {
      return defaultValue;
    }
    return JSON.parse(serializedData);
  } catch (error) {
    console.error('Error loading from local storage:', error);
    return defaultValue;
  }
};

/**
 * Saves data to Local Storage.
 */
export const saveToLocalStorage = (key, data) => {
  try {
    const serializedData = JSON.stringify(data);
    localStorage.setItem(key, serializedData);
  } catch (error) {
    console.error('Error saving to local storage:', error);
  }
};

// Initial state loaders
export const loadInitialIdeas = () =>
  loadFromLocalStorage(IDEAS_STORAGE_KEY, INITIAL_IDEAS);
export const loadInitialVotes = () =>
  loadFromLocalStorage(VOTES_STORAGE_KEY, {});

// Saver functions
export const saveIdeas = (ideas) =>
  saveToLocalStorage(IDEAS_STORAGE_KEY, ideas);
export const saveVotes = (votes) =>
  saveToLocalStorage(VOTES_STORAGE_KEY, votes);
