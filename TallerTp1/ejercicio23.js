const url = 'https://jsonplaceholder.typicode.com/invalid-url';

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok: ' + response.statusText);
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.log('Error:', error.message));
