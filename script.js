const root = document.getElementById('root');

const getPokemonData = async () => {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=15');
        const data = await response.json();
        
        root.innerHTML = '';

        for (const item of data.results) {
            const res = await fetch(item.url);
            const detail = await res.json();
            renderCard(detail);
        }
    } catch (err) {
        root.innerHTML = 'Erro ao carregar dados.';
    }
};

const renderCard = (pokemon) => {
    const div = document.createElement('div');
    div.className = 'card';

    div.innerHTML = `
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
        <h2>${pokemon.name}</h2>
        <p>Type: ${pokemon.types[0].type.name}</p>
    `;

    root.appendChild(div);
};

getPokemonData();