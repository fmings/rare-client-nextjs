// const apiUrl = '/posts';

const getAllPosts = () => new Promise((resolve, reject) => {
  fetch('/posts', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve((data)))
    .catch(reject);
});

export default getAllPosts;
