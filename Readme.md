
eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ODg0ZjdmNzRlYWRlZWU2MmIxOGVlMjExNDg0NGY5MCIsIm5iZiI6MTcyNzI1NTA4Ny40MDc1MTUsInN1YiI6IjY2ZjNjZGQzNzQwMTM4NjQxZTY5ZWNlZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bX2-5iXjwCdQpUvLB72wJ0phAorzsdfdBW7MsxGWhF8


t fetch = require('node-fetch');

const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ODg0ZjdmNzRlYWRlZWU2MmIxOGVlMjExNDg0NGY5MCIsIm5iZiI6MTcyNzI1NTA4Ny40MDc1MTUsInN1YiI6IjY2ZjNjZGQzNzQwMTM4NjQxZTY5ZWNlZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bX2-5iXjwCdQpUvLB72wJ0phAorzsdfdBW7MsxGWhF8'
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));
