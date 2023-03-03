let imageBaseURL='https://image.tmdb.org/t/p/';
let genresAPI=`https://api.themoviedb.org/3/genre/movie/list?api_key=489f7b75005de75c58b6cc0f3f9608e2&language=en-US`;
let popularMoviesAPI=`https://api.themoviedb.org/3/movie/popular?api_key=489f7b75005de75c58b6cc0f3f9608e2&language=en-US&page=1`;
let languageListAPI=`https://api.themoviedb.org/3/discover/movie?api_key=489f7b75005de75c58b6cc0f3f9608e2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_original_language=en`;
let movieId=localStorage.getItem('movieId');
let movieDetailsAPI=`https://api.themoviedb.org/3/movie/${localStorage.getItem('movieId')}?api_key=489f7b75005de75c58b6cc0f3f9608e2&language=en-US&append_to_response=casts,videos,images,releases`;
function fetchDataFromServer(apiLink,callBack){
  fetch(apiLink).then(data=>data.json()).then(data=>callBack(data));
}
export {imageBaseURL,fetchDataFromServer,genresAPI,popularMoviesAPI,movieDetailsAPI};