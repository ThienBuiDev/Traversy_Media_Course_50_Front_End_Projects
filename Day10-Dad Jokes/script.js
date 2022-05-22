const jokeElement = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

generateJoke()
jokeBtn.onclick = generateJoke
async function generateJoke() {
	const config = {
		headers: {
			Accept: 'application/json',
		},
	}
	const res = await fetch('https://icanhazdadjoke.com/', config)
	const data = await res.json()
	jokeElement.innerText = data.joke
}
