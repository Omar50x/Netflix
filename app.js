async function getData(url){
    let res = await fetch(url);
    return res.json();
}

getData("https://api.watchmode.com/v1/sources/?apiKey=RXnibDhDTacGWiE349ruwDd9loWC6FHMsmfxeyEb").then((data)=>console.log(data[0]))

let tv = document.getElementById('tv')
let film = document.createElement('video');
film.src = data.name[0];
tv.appendChild(film);
console.log(data.name);
