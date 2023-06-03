const memeBtn = document.getElementById('generate_meme-btn');
const memetitle = document.getElementById('meme_title');
const memeImage = document.querySelector('img');
const memeAuthor = document.getElementById('meme-author');

const upDateDetails = (url, title, author) => {
    memeImage.setAttribute("src", url);
    memetitle.innerHTML = title;
    memeAuthor.innerHTML = `Meme by: ${author}`;
}


const generateMeme = () => {
    fetch("https://meme-api.com/gimme/wholesomememes")
        .then((response) => response.json())
        .then((data) => {
            upDateDetails(data.url, data.title, data.author);
        });
};
memeBtn.addEventListener('click', generateMeme);

//generateMeme();

