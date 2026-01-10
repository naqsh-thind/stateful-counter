// API service to interact with the backend
// Base URL for your backend API
const API_URL = 'http://localhost:5001/api/counter';

// Fetch the current counter value from the backend
export const loadCounter = async () => {
  try {
    const response = await fetch(API_URL);
    
    if (!response.ok) {
      throw new Error('Failed to fetch counter');
    }
    
    const data = await response.json();
    return data.value;
  } catch (error) {
    console.error('Error loading counter:', error);
    return 0;  // Return 0 as fallback if API fails
  }
};

// Save the counter value to the backend
export const saveCounter = async (value) => {
  try {
    const response = await fetch(API_URL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ value }),
    });
    
    if (!response.ok) {
      throw new Error('Failed to save counter');
    }
    
    const data = await response.json();
    return true;
  } catch (error) {
    console.error('Error saving counter:', error);
    return false;
  }
};