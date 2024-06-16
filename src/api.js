import axios from 'axios';

const API_BASE_URL = 'http://localhost:5001'; // Change to your backend URL and port

export const generateEssay = async (userBackground, userId) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/generate-essay`, {
      userBackground,
      userId,
    });
    return response.data;
  } catch (error) {
    console.error('Error generating essay:', error);
    throw error;
  }
};

export const viewEssays = async (userId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/view-essays`, {
      params: { userId },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching essays:', error);
    throw error;
  }
};