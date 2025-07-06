// constants/index.ts

//API Endpoints
export const API_BASE_URL = 'https://api.example.com';
export const API_TIMEOUT = 10000; // in ms

//UI Text
export const UI_TEXT = {
  BOOK_NOW: 'Book Now',
  DETAILS: 'View Details',
  LOADING: 'Loading...',
  ERROR_GENERIC: 'Something went wrong. Please try again.',
};

//Config
export const CONFIG = {
  MAX_RETRIES: 3,
  DEFAULT_LANGUAGE: 'en',
  FEATURE_FLAGS: {
    enableDarkMode: true,
    showBetaBanner: false,
  },
};

//Routes (optional)
export const ROUTES = {
  HOME: '/',
  DETAILS: '/details',
  BOOKING: '/booking',
};
