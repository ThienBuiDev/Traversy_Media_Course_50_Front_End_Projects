const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=7b01fa92fe17f51f820875025e8e7680&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=7b01fa92fe17f51f820875025e8e7680&query="'
const mainElement = document.getElementById('main')
const searchForm = document.forms[0]
const search = document.getElementById('search')
getMovies(API_URL)

async function getMovies(url) {
	const res = await fetch(url)
	const data = await res.json()

	const movies = data.results
	console.log(movies)
	let html = ''
	movies.forEach((movie) => {
		html += `
	<div class="movie">
					<img src="${IMG_PATH + movie.poster_path}" alt="${movie.original_title}" />

					<div class="movie-info">
						<h3>${movie.original_title}</h3>
						<span class="${(movie.vote_average >= 8 && 'green') || (movie.vote_average >= 5 && 'orange') || 'red'}">${movie.vote_average}</span>
					</div>

					<div class="overview">
						<h3>Overview</h3>
	          ${movie.overview}
					</div>			</div>
	`
	})

	mainElement.innerHTML = html
}

searchForm.addEventListener('submit', (e) => {
	e.preventDefault()
	const searchValue = search.value

	if (searchValue.trim() !== '') {
		getMovies(SEARCH_API + searchValue)
	}
	search.value = ''
})
