const type = ["news website", "blog", "reviews website", "presentation website", "forum", "live website", "entertaiment website", "ecommerce website", "membership website"];

const theme = ["football", "basketball", "rugby", "parkour", "breakdancing", "parachuting", "paragliding", "skysurfing", "skateboarding", "scootering", "snowboarding", "surfing", "dodgeball", "frisbee", "baseball", "mountain climbing", "cycling", "box", "hockey", "fishing", "automobiles history", "cars", "car parts", "bycicles", "trains", "motorcycles", "story telling", "actors", "airforces", "airplanes", "books", "tech", "laptops", "how to build a pc", "pc parts", "keyboards", "consoles", "console games", "pc games", "gaming"];

const getRandomNameType = () => `${type[Math.floor(Math.random() * type.length)]}`;
const getRandomNameTheme = () => `${theme[Math.floor(Math.random() * theme.length)]}`;

const setRandomName = () => {
    document.getElementById('random-type').innerText = getRandomNameType();
    document.getElementById('random-theme').innerText = getRandomNameTheme();
}

document.getElementById('generate').addEventListener('click', setRandomName);
