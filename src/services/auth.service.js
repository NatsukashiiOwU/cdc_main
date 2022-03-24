import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth/';

const register = (username, email, university) => axios.post(`${API_URL}signup`, {
  username,
  email,
  university,
});

const login = (email, password) => axios
  .post(`${API_URL}signin`, {
    email,
    password,
  })
  .then((response) => {
    if (response.data.accessToken) {
      localStorage.setItem('user', JSON.stringify(response.data));
    }

    return response.data;
  });

const logout = () => {
  localStorage.removeItem('user');
};

export default {
  register,
  login,
  logout,
};
