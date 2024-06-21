const container = document.querySelector(".container")
const unsplashURL = `https://picsum.photos/id/`
const rows = 9

for(let i = 0; i<rows*3; i++){
    const img = document.createElement("img")
    img.src = `${unsplashURL}${getRandomSize()}`
    container.appendChild(img)
}

function getRandomNumber(){
    return Math.floor(Math.random()*100 + 300)
}

function getRandomSize(){
    return `${getRandomNumber()}/${getRandomNumber()}`
}