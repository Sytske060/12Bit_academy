const dogImage = document.getElementById('dog-image');
const likeButton = document.getElementById('like-button');
const dislikeButton = document.getElementById('dislike-button');
const likeCounter = document.getElementById('like-counter');
const dislikeCounter = document.getElementById('dislike-counter');
const heartImage = document.getElementById('heart-image');
const crossImage = document.getElementById('cross-image');

let likes = parseInt(localStorage.getItem('likes'), 10) || 0;
let dislikes = parseInt(localStorage.getItem('dislikes'), 10) || 0;

likeCounter.textContent = likes;
dislikeCounter.textContent = dislikes;

async function fetchDogImage() {
    try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        dogImage.src = data.message;
    } catch (error) {
        console.error('Error fetching dog image:', error);
    }
}

function updateLocalStorage() {
    localStorage.setItem('likes', likes);
    localStorage.setItem('dislikes', dislikes);
}

likeButton.addEventListener('click', () => {
    likes++;
    likeCounter.textContent = likes;
    updateLocalStorage();
    fetchDogImage();
    showHeart();
});

dislikeButton.addEventListener('click', () => {
    dislikes++;
    dislikeCounter.textContent = dislikes;
    updateLocalStorage();
    fetchDogImage();
    showCross();
});

function showHeart() {
    heartImage.classList.remove('hidden');
    setTimeout(() => {
        heartImage.classList.add('hidden');
    }, 1000); // Verberg het hart na 1 seconde (1000 milliseconden)
}

function showCross() {
    crossImage.classList.remove('hidden');
    setTimeout(() => {
        crossImage.classList.add('hidden');
    }, 1000); // Verberg het kruisje na 1 seconde (1000 milliseconden)
}

fetchDogImage();


