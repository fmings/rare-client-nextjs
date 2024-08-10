import clientCredentials from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getAllCategories = () => new Promise((res, rej) => {
  fetch(`${endpoint}/categories`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((reponse) => reponse.json())
    .then((data) => res(data))
    .catch(rej);
});

const createCategory = (payload) => new Promise((res, rej) => {
  fetch(`${endpoint}/categories`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((reponse) => reponse.json())
    .then((data) => res(data))
    .catch(rej);
});

const FilterPostByCategory = () => new Promise((res, rej) => {
  fetch(`${endpoint}/categories/{id}/posts`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => res(data))
    .catch(rej);
});

export { getAllCategories, createCategory, FilterPostByCategory };
