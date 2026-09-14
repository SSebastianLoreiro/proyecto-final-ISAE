const API_URL = '/api';

function getToken() {
  return localStorage.getItem('token');
}

function setToken(token) {
  localStorage.setItem('token', token);
}

function removeToken() {
  localStorage.removeItem('token');
}

function getUser() {
  const data = localStorage.getItem('user');
  return data ? JSON.parse(data) : null;
}

function setUser(user) {
  localStorage.setItem('user', JSON.stringify(user));
}

function removeUser() {
  localStorage.removeItem('user');
}

function logout() {
  removeToken();
  removeUser();
  window.location.href = 'login.html';
}

async function apiRequest(endpoint, method = 'GET', body = null) {
  const headers = { 'Content-Type': 'application/json' };
  const token = getToken();
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const config = { method, headers };
  if (body) config.body = JSON.stringify(body);

  const res = await fetch(`${API_URL}${endpoint}`, config);
  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.error || 'Error en la solicitud');
  }

  return data;
}

async function register(email, password) {
  const data = await apiRequest('/register', 'POST', { email, password });
  setToken(data.token);
  setUser(data.user);
  return data;
}

async function login(email, password) {
  const data = await apiRequest('/login', 'POST', { email, password });
  setToken(data.token);
  setUser(data.user);
  return data;
}

async function getMe() {
  return await apiRequest('/me');
}

function isLoggedIn() {
  return !!getToken();
}
