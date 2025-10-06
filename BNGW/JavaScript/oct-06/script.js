// const header = document.querySelector('header');
// const footer = document.querySelector('footer');
// const main = document.querySelector('main');

// main.style.minHeight = `calc(100vh - ${header.offsetHeight + footer.offsetHeight}px`;

// let's use fetch api from tmdb to fetch latest movies

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MzA5ZGE4NThmYjA0OTNmNjMzMmJmMDRjOGM1NjhlYSIsIm5iZiI6MTcyNDkxNDQxMS43MDMsInN1YiI6IjY2ZDAxYWViNmMwMzQzYTY5MTAzMmJiZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gHfC4cKMFb93wgn1R9_I1wLhX8cHADOzCyG_LjzvsWQ'
  }
};

fetch('https://api.themoviedb.org/3/collection/10/images', options)
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.error(err));