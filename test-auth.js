const axios = require('axios');

const API_URL = 'http://localhost:5000/api/auth';
const testUser = {
  name: 'Test User',
  email: 'testuser@example.com',
  password: 'testpassword123'
};

async function testAuth() {
  try {
    // Register
    console.log('Registering user...');
    const regRes = await axios.post(`${API_URL}/register`, testUser);
    console.log('Register response:', regRes.data);
  } catch (err) {
    if (err.response) {
      console.log('Register error:', err.response.data);
    } else {
      console.error('Register error:', err.message);
    }
  }

  try {
    // Login
    console.log('Logging in...');
    const loginRes = await axios.post(`${API_URL}/login`, {
      email: testUser.email,
      password: testUser.password
    });
    console.log('Login response:', loginRes.data);
  } catch (err) {
    if (err.response) {
      console.log('Login error:', err.response.data);
    } else {
      console.error('Login error:', err.message);
    }
  }
}

testAuth(); 