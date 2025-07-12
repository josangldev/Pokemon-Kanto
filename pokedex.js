async function cargarPokedex() {
  console.log("Cargando pokedex...");
  const res = await fetch('public/pokedex.json');
  const pokedex = await res.json();
  const slides = document.getElementById('pokemon-slides');
  slides.innerHTML = '';
  pokedex.forEach(pokemon => {
    const div = document.createElement('div');
    div.className = 'pokemon-display';
    div.innerHTML = `
      <img src="/img/${pokemon.imagen}" alt="${pokemon.nombre}" class="pokemon-image" />
      <div class="pokemon-info">
        <h2>#${pokemon.numero.toString().padStart(3, '0')} ${pokemon.nombre}</h2>
        <p>Tipo: ${pokemon.tipo}</p>
        <div class="stats-bar">
          <div class="stat-row"><span>PS</span><div class="bar"><div class="bar-inner bar-hp" style="width: ${pokemon.ps}%;"></div></div><span class="stat-value">${pokemon.ps}</span></div>
          <div class="stat-row"><span>Ataque</span><div class="bar"><div class="bar-inner bar-atk" style="width: ${pokemon.ataque}%;"></div></div><span class="stat-value">${pokemon.ataque}</span></div>
          <div class="stat-row"><span>Defensa</span><div class="bar"><div class="bar-inner bar-def" style="width: ${pokemon.defensa}%;"></div></div><span class="stat-value">${pokemon.defensa}</span></div>
          <div class="stat-row"><span>Atq. Esp.</span><div class="bar"><div class="bar-inner bar-spa" style="width: ${pokemon.atq_esp}%;"></div></div><span class="stat-value">${pokemon.atq_esp}</span></div>
          <div class="stat-row"><span>Def. Esp.</span><div class="bar"><div class="bar-inner bar-spd" style="width: ${pokemon.def_esp}%;"></div></div><span class="stat-value">${pokemon.def_esp}</span></div>
          <div class="stat-row"><span>Velocidad</span><div class="bar"><div class="bar-inner bar-spe" style="width: ${pokemon.velocidad}%;"></div></div><span class="stat-value">${pokemon.velocidad}</span></div>
        </div>
      </div>
    `;
    slides.appendChild(div);
  });
}
document.addEventListener('DOMContentLoaded', cargarPokedex); 