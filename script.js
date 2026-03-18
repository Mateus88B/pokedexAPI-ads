const container = document.getElementById('card-container');
const btn = document.getElementById('draw-btn');

const getRandomPokemon = async () => {
    container.innerHTML = '<p>Buscando...</p>';
    
    try {
        const randomId = Math.floor(Math.random() * 150) + 1;
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
        const data = await response.json();
        
        renderPokeCard(data);
    } catch (err) {
        container.innerHTML = '<p>Erro ao sortear. Tente de novo.</p>';
    }
};

const renderPokeCard = (pokemon) => {
    container.innerHTML = `
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
        <h2>${pokemon.name}</h2>
        <p>Type: ${pokemon.types[0].type.name}</p>
    `;
};

btn.addEventListener('click', getRandomPokemon);
