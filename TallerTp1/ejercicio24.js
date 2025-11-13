const url = 'https://jsonplaceholder.typicode.com/posts/1';
const data = {
id: 1,
title: 'foo',
body: 'bar',
userId: 1
};
fetch(url, {
method: 'PUT', // Método HTTP
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify(data)
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));