import "./sass/style.scss";

document.addEventListener("DOMContentLoaded", () => {
  const audio = document.querySelector(".audio");
  const toggle = document.getElementById("toggle");
  const playToggle = document.getElementById("play-toggle");
  const container = document.querySelector(".container");

  if (container && toggle) {
    container.addEventListener('click', function(event) {
      event.preventDefault();
      event.stopPropagation();
      const rect = container.getBoundingClientRect();
      const radius = rect.width / 2;
      const centerX = rect.left + radius;
      const centerY = rect.top + radius;
      const clickX = event.clientX;
      const clickY = event.clientY;
      const distance = Math.sqrt(Math.pow(clickX - centerX, 2) + Math.pow(clickY - centerY, 2));
      if (distance <= radius) {
        toggle.checked = !toggle.checked;
      }
    });
  }

  const startPokemonBtn = document.getElementById("start-pokemon-btn");
  if (startPokemonBtn) {
    startPokemonBtn.addEventListener('click', () => {
      window.location.href = 'pokemon.html?autoplay=true';
    });
  }

  const inicioBtn = document.getElementById("inicio-btn");
  if (inicioBtn) {
    inicioBtn.addEventListener("click", () => {
      window.location.href = "index.html";
    });
  }

  if (audio && playToggle) {
    const updatePlayButtonState = (isPlaying) => {
      playToggle.textContent = isPlaying ? "Pause" : "Play";
      playToggle.title = isPlaying ? "Pausar audio" : "Reproducir audio";
    };
    playToggle.addEventListener("click", () => {
      audio.paused ? audio.play() : audio.pause();
    });
    audio.addEventListener('play', () => updatePlayButtonState(true));
    audio.addEventListener('pause', () => updatePlayButtonState(false));
  } else if (!audio) {
    console.warn("Elemento <audio> no encontrado.");
  }

  inicializarCarruselYBusqueda();

  const statRows = document.querySelectorAll('.stats-bar');
  statRows.forEach(statsBar => {
    const rows = statsBar.querySelectorAll('.stat-row');
    rows.forEach(row => {
      const valueSpan = row.querySelector('.stat-value');
      const barInner = row.querySelector('.bar-inner');
      if (valueSpan && barInner) {
        const value = parseInt(valueSpan.textContent, 10);
        let width = value;
        barInner.style.width = width + '%';
      }
    });
  });

  const startTrivialBtn = document.getElementById('start-trivial-btn');
  if (startTrivialBtn) {
    startTrivialBtn.addEventListener('click', () => {
      window.location.href = 'trivial.html';
    });
  }

  const trivialContainer = document.getElementById('trivial-container');
  if (trivialContainer) {
    const trivialQuestion = document.getElementById('trivial-question');
    const trivialOptions = document.getElementById('trivial-options');
    const trivialFeedback = document.getElementById('trivial-feedback');
    let trivialNextBtn = document.getElementById('trivial-next');
    const trivialScore = document.getElementById('trivial-score');

    const questionBank = [
      { question: '¿Cuál de estos Pokémon NO es de tipo Fuego en la primera generación?', options: ['Charmander', 'Vulpix', 'Ponyta', 'Psyduck'], answer: 3 },
      { question: '¿Qué objeto necesitas para despertar a Snorlax?', options: ['Poké Flauta', 'Flauta Azul', 'Despertador', 'Campana Alivio'], answer: 0 },
      { question: '¿En qué ciudad se encuentra el gimnasio de Misty?', options: ['Ciudad Plateada', 'Ciudad Celeste', 'Ciudad Fucsia', 'Ciudad Azafrán'], answer: 1 },
      { question: '¿Cuál es la evolución de Meowth en la primera generación?', options: ['Persian', 'Perrserker', 'Meowstic', 'No tiene evolución'], answer: 0 },
      { question: '¿Qué MT contiene el movimiento "Rayo" (Thunderbolt)?', options: ['MT24', 'MT25', 'MT28', 'MT36'], answer: 0 },
      { question: '¿Cuál de estos Pokémon es exclusivo de Pokémon Rojo?', options: ['Sandshrew', 'Ekans', 'Vulpix', 'Meowth'], answer: 1 },
      { question: '¿Cuántas medallas de gimnasio necesitas para desafiar al Alto Mando?', options: ['7', '8', '9', '10'], answer: 1 },
      { question: '¿Qué tipo de Pokémon es súper efectivo contra el tipo Psíquico en la Gen 1?', options: ['Fantasma', 'Bicho', 'Siniestro', 'Acero'], answer: 1 },
      { question: '¿Cuál es el Pokémon número 151 en la Pokédex Nacional?', options: ['Mewtwo', 'Dragonite', 'Mew', 'Articuno'], answer: 2 },
      { question: '¿Dónde encuentras al legendario Zapdos?', options: ['Monte Luna', 'Cueva Celeste', 'Central de Energía', 'Islas Espuma'], answer: 2 },
      { question: '¿Qué Pokémon es el número 25 en la Pokédex?', options: ['Pikachu', 'Raichu', 'Clefairy', 'Jigglypuff'], answer: 0 },
      { question: '¿Cuál es el tipo de Eevee en la primera generación?', options: ['Normal', 'Agua', 'Fuego', 'Eléctrico'], answer: 0 },
      { question: '¿Qué Pokémon es conocido como el "Pokémon Ratón"?', options: ['Rattata', 'Pikachu', 'Sandshrew', 'Diglett'], answer: 1 },
      { question: '¿Qué ciudad es famosa por su Torre Pokémon?', options: ['Ciudad Azulona', 'Ciudad Lavanda', 'Ciudad Celeste', 'Ciudad Plateada'], answer: 1 },
      { question: '¿Qué líder de gimnasio usa Pokémon de tipo Roca?', options: ['Misty', 'Brock', 'Erika', 'Sabrina'], answer: 1 },
      { question: '¿Cuál es la evolución de Poliwag?', options: ['Poliwhirl', 'Poliwrath', 'Politoed', 'No tiene'], answer: 0 },
      { question: '¿Qué Pokémon es conocido por dormir mucho?', options: ['Snorlax', 'Jigglypuff', 'Slowpoke', 'Drowzee'], answer: 0 },
      { question: '¿Qué objeto permite evolucionar a Gloom en Vileplume?', options: ['Piedra Agua', 'Piedra Fuego', 'Piedra Hoja', 'Piedra Trueno'], answer: 2 },
      { question: '¿Cuál de estos Pokémon es de tipo Fantasma?', options: ['Gastly', 'Abra', 'Zubat', 'Machop'], answer: 0 },
      { question: '¿Qué Pokémon es el inicial de tipo Agua?', options: ['Bulbasaur', 'Charmander', 'Squirtle', 'Pidgey'], answer: 2 },
      { question: '¿Qué Pokémon evoluciona con una Piedra Trueno?', options: ['Pikachu', 'Magnemite', 'Voltorb', 'Electabuzz'], answer: 0 },
      { question: '¿Cuál es el movimiento característico de Jigglypuff?', options: ['Canto', 'Placaje', 'Gruñido', 'Doble Bofetón'], answer: 0 },
      { question: '¿Qué Pokémon es conocido como el "Pokémon Llama"?', options: ['Charmander', 'Magmar', 'Moltres', 'Ponyta'], answer: 0 },
      { question: '¿Qué Pokémon legendario es de tipo Hielo/Volador?', options: ['Articuno', 'Zapdos', 'Moltres', 'Mewtwo'], answer: 0 },
      { question: '¿Qué ciudad tiene el casino en la primera generación?', options: ['Ciudad Azulona', 'Ciudad Fucsia', 'Ciudad Azafrán', 'Ciudad Plateada'], answer: 0 },
      { question: '¿Qué Pokémon es el rival de Ash en el anime y en los juegos?', options: ['Gary', 'Brock', 'Misty', 'Tracey'], answer: 0 },
      { question: '¿Qué Pokémon es conocido por su ataque "Hiperrayo"?', options: ['Dragonite', 'Gyarados', 'Tauros', 'Pidgeot'], answer: 0 },
      { question: '¿Qué Pokémon es de tipo Planta/Veneno?', options: ['Bulbasaur', 'Oddish', 'Bellsprout', 'Todos'], answer: 3 },
      { question: '¿Qué Pokémon es el número 1 en la Pokédex?', options: ['Bulbasaur', 'Ivysaur', 'Venusaur', 'Charmander'], answer: 0 },
      { question: '¿Qué Pokémon evoluciona a Raichu?', options: ['Pikachu', 'Pichu', 'Magnemite', 'Voltorb'], answer: 0 },
      { question: '¿Qué Pokémon es de tipo Agua/Psíquico?', options: ['Starmie', 'Slowbro', 'Psyduck', 'Ambos 1 y 2'], answer: 3 },
      { question: '¿Qué Pokémon es conocido por su caparazón duro?', options: ['Shellder', 'Cloyster', 'Kabuto', 'Todos'], answer: 3 },
      { question: '¿Qué Pokémon es de tipo Dragón en la primera generación?', options: ['Dragonair', 'Dragonite', 'Dratini', 'Todos'], answer: 3 },
      { question: '¿Qué Pokémon es el líder del Team Rocket?', options: ['Giovanni', 'James', 'Jessie', 'Meowth'], answer: 0 },
      { question: '¿Qué Pokémon es conocido por su ataque "Psíquico"?', options: ['Alakazam', 'Hypno', 'Mr. Mime', 'Todos'], answer: 3 },
      { question: '¿Qué Pokémon es de tipo Lucha?', options: ['Machop', 'Machoke', 'Machamp', 'Todos'], answer: 3 },
      { question: '¿Qué Pokémon es de tipo Volador/Normal?', options: ['Pidgey', 'Spearow', 'Farfetch\'d', 'Todos'], answer: 3 },
      { question: '¿Qué Pokémon es conocido por su ataque "Surf"?', options: ['Lapras', 'Blastoise', 'Gyarados', 'Todos'], answer: 3 },
      { question: '¿Qué Pokémon es de tipo Roca/Tierra?', options: ['Onix', 'Golem', 'Rhyhorn', 'Todos'], answer: 3 },
      { question: '¿Qué Pokémon es de tipo Agua/Hielo?', options: ['Dewgong', 'Cloyster', 'Lapras', 'Todos'], answer: 3 },
      { question: '¿Qué Pokémon es de tipo Planta/Psíquico?', options: ['Exeggcute', 'Exeggutor', 'Tangela', 'Ninguno'], answer: 1 },
      { question: '¿Qué Pokémon es de tipo Eléctrico/Volador?', options: ['Zapdos', 'Moltres', 'Articuno', 'Ninguno'], answer: 0 },
      { question: '¿Qué Pokémon es de tipo Agua/Veneno?', options: ['Tentacool', 'Tentacruel', 'Ambos', 'Ninguno'], answer: 2 },
      { question: '¿Qué Pokémon es de tipo Fuego/Volador?', options: ['Charizard', 'Moltres', 'Ambos', 'Ninguno'], answer: 2 },
      { question: '¿Qué Pokémon es de tipo Agua/Roca?', options: ['Omanyte', 'Kabuto', 'Ambos', 'Ninguno'], answer: 2 },
      { question: '¿Qué Pokémon es de tipo Planta/Hada?', options: ['Clefairy', 'Jigglypuff', 'Ninguno', 'Oddish'], answer: 2 },
      { question: '¿Qué Pokémon es de tipo Agua/Eléctrico?', options: ['Lanturn', 'Chinchou', 'Ninguno', 'Magnemite'], answer: 2 },
      { question: '¿Qué Pokémon es de tipo Bicho/Veneno?', options: ['Weedle', 'Beedrill', 'Ambos', 'Ninguno'], answer: 2 },
      { question: '¿Qué Pokémon es de tipo Bicho/Volador?', options: ['Butterfree', 'Scyther', 'Ambos', 'Ninguno'], answer: 2 },
      { question: '¿Qué Pokémon es de tipo Agua/Fantasma?', options: ['Gastly', 'Haunter', 'Ninguno', 'Gengar'], answer: 2 },
      { question: '¿Qué Pokémon es de tipo Normal/Psíquico?', options: ['Jynx', 'Mr. Mime', 'Ambos', 'Ninguno'], answer: 2 },
      { question: '¿Qué Pokémon es de tipo Agua/Dragón?', options: ['Gyarados', 'Dragonair', 'Ninguno', 'Dratini'], answer: 2 },
      { question: '¿Qué Pokémon es de tipo Planta/Agua?', options: ['Ludicolo', 'Lotad', 'Ninguno', 'Oddish'], answer: 2 },
      { question: '¿Qué Pokémon es de tipo Fuego/Roca?', options: ['Magcargo', 'Ninguno', 'Graveler', 'Golem'], answer: 1 },
      { question: '¿Qué Pokémon es de tipo Hielo/Psíquico?', options: ['Jynx', 'Lapras', 'Ambos', 'Ninguno'], answer: 0 },
      { question: '¿Qué Pokémon es de tipo Agua/Planta?', options: ['Ludicolo', 'Lotad', 'Ninguno', 'Oddish'], answer: 2 },
      { question: '¿Qué Pokémon es de tipo Fuego/Agua?', options: ['Volcanion', 'Ninguno', 'Magmar', 'Vaporeon'], answer: 1 },
      { question: '¿Qué Pokémon es de tipo Eléctrico/Acero?', options: ['Magnemite', 'Magneton', 'Ambos', 'Ninguno'], answer: 2 },
      { question: '¿Qué Pokémon es de tipo Agua/Siniestro?', options: ['Carvanha', 'Sharpedo', 'Ninguno', 'Gyarados'], answer: 2 },
      { question: '¿Qué Pokémon es de tipo Planta/Siniestro?', options: ['Cacturne', 'Shiftry', 'Ninguno', 'Oddish'], answer: 2 },
      { question: '¿Qué Pokémon es de tipo Fuego/Siniestro?', options: ['Houndoom', 'Ninguno', 'Magmar', 'Arcanine'], answer: 1 },
      { question: '¿Qué Pokémon es de tipo Agua/Hada?', options: ['Azumarill', 'Ninguno', 'Lapras', 'Jigglypuff'], answer: 1 },
      { question: '¿Qué Pokémon es de tipo Planta/Dragón?', options: ['Mega Sceptile', 'Ninguno', 'Exeggutor de Alola', 'Tangela'], answer: 1 },
      { question: '¿Qué Pokémon es de tipo Fuego/Dragón?', options: ['Charizard', 'Ninguno', 'Dragonite', 'Salamence'], answer: 1 },
      { question: '¿Qué Pokémon es de tipo Agua/Acero?', options: ['Empoleon', 'Ninguno', 'Blastoise', 'Cloyster'], answer: 1 },
      { question: '¿Qué Pokémon es de tipo Planta/Acero?', options: ['Ferrothorn', 'Ninguno', 'Forretress', 'Scizor'], answer: 1 },
      { question: '¿Qué Pokémon es de tipo Fuego/Hada?', options: ['Ninetales de Alola', 'Ninguno', 'Clefairy', 'Jigglypuff'], answer: 1 },
      { question: '¿Qué Pokémon es de tipo Agua/Fuego?', options: ['Volcanion', 'Ninguno', 'Magmar', 'Vaporeon'], answer: 0 },
    ];

    let questions = [];

    function getRandomQuestions(bank, n) {
      const shuffled = bank.slice().sort(() => 0.5 - Math.random());
      return shuffled.slice(0, n);
    }

    let currentQuestionIndex = 0;
    let score = 0;

    const startTrivial = () => {
      questions = getRandomQuestions(questionBank, 10);
      currentQuestionIndex = 0;
      score = 0;
      trivialScore.style.display = 'none';
      trivialNextBtn.textContent = 'Siguiente';
      const newBtn = trivialNextBtn.cloneNode(true);
      trivialNextBtn.parentNode.replaceChild(newBtn, trivialNextBtn);
      trivialNextBtn = document.getElementById('trivial-next');
      newBtn.addEventListener('click', nextQuestion);
      showQuestion();
    };

    const showQuestion = () => {
      trivialFeedback.textContent = '';
      trivialNextBtn.classList.add('oculto');
      trivialOptions.innerHTML = '';
      
      const currentQuestion = questions[currentQuestionIndex];
      trivialQuestion.textContent = currentQuestion.question;

      currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.dataset.index = index;
        button.addEventListener('click', selectAnswer);
        trivialOptions.appendChild(button);
      });
    };

    const selectAnswer = (e) => {
      const selectedButton = e.target;
      const selectedAnswerIndex = parseInt(selectedButton.dataset.index, 10);
      const correctAnswerIndex = questions[currentQuestionIndex].answer;

      Array.from(trivialOptions.children).forEach(btn => {
        btn.disabled = true;
        btn.removeEventListener('click', selectAnswer);
      });

      if (selectedAnswerIndex === correctAnswerIndex) {
        trivialFeedback.textContent = '¡Correcto!';
        trivialFeedback.style.color = '#388e3c';
        score++;
      } else {
        trivialFeedback.textContent = `Incorrecto. La respuesta era: ${questions[currentQuestionIndex].options[correctAnswerIndex]}`;
        trivialFeedback.style.color = '#d32f2f';
      }

      trivialNextBtn.classList.remove('oculto');
      if (currentQuestionIndex === questions.length - 1) {
        trivialNextBtn.textContent = 'Ver Puntuación';
      }
    };

    const nextQuestion = () => {
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        showQuestion();
      } else {
        showScore();
      }
    };

    const showScore = () => {
      trivialQuestion.textContent = '¡Trivial completado!';
      trivialOptions.innerHTML = '';
      trivialFeedback.innerHTML = '';
      trivialScore.textContent = `Tu puntuación: ${score} de ${questions.length}`;
      trivialScore.style.display = 'block';
      trivialNextBtn.textContent = 'Volver a Jugar';
      const newBtn = trivialNextBtn.cloneNode(true);
      trivialNextBtn.parentNode.replaceChild(newBtn, trivialNextBtn);
      trivialNextBtn = document.getElementById('trivial-next');
      newBtn.addEventListener('click', startTrivial, { once: true });
    };
    
    trivialNextBtn?.addEventListener('click', nextQuestion);

    startTrivial();
  }

  const startSobreMiBtn = document.getElementById("start-sobremi-btn");
  if (startSobreMiBtn) {
    startSobreMiBtn.addEventListener('click', () => {
      window.location.href = 'sobremi.html';
    });
  }

  if (window.location.pathname.endsWith("pokemon.html")) {
    async function cargarPokedex() {
      const res = await fetch('/pokedex.json');
      const pokedex = await res.json();
      const slides = document.getElementById('pokemon-slides');
      if (!slides) return;
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
      inicializarCarruselYBusqueda();
    }
    cargarPokedex();
  }
});

function inicializarCarruselYBusqueda() {
  const carouselContainer = document.querySelector('.pokemon-carousel-container');
  if (carouselContainer) {
    const slidesContainer = carouselContainer.querySelector('.pokemon-slides');
    const slides = carouselContainer.querySelectorAll('.pokemon-display');
    const prevArrow = carouselContainer.querySelector('.prev-arrow');
    const nextArrow = carouselContainer.querySelector('.next-arrow');
    if (slides.length > 0) {
      let currentSlideIndex = 0;
      let filteredIndexes = null;
      let filteredCurrent = 0;
      function getNextVisibleIndex(current, direction) {
        let idx = current;
        const total = slides.length;
        for (let i = 1; i < total; i++) {
          let next = (current + direction * i + total) % total;
          if (slides[next].style.display !== 'none') {
            return next;
          }
        }
        return current;
      }
      const showSlide = (index) => {
        let realIndex = index;
        if (slides[realIndex].style.display === 'none') {
          realIndex = getNextVisibleIndex(realIndex, 1);
        }
        currentSlideIndex = realIndex;
        const offset = -currentSlideIndex * 100;
        if (slidesContainer) {
          slidesContainer.style.transform = `translateX(${offset}%)`;
        }
        slides.forEach(slide => slide.classList.remove('active-slide'));
        slides[realIndex].classList.add('active-slide');
      }
      function showFilteredSlide(filteredIdxArr, idxInFiltered) {
        slides.forEach(slide => slide.style.display = 'none');
        const realIdx = filteredIdxArr[idxInFiltered];
        slides[realIdx].style.display = '';
        slides.forEach(slide => slide.classList.remove('active-slide'));
        slides[realIdx].classList.add('active-slide');
        if (slidesContainer) slidesContainer.style.transform = '';
      }
      prevArrow?.addEventListener('click', () => {
        if (filteredIndexes) {
          filteredCurrent = (filteredCurrent - 1 + filteredIndexes.length) % filteredIndexes.length;
          showFilteredSlide(filteredIndexes, filteredCurrent);
        } else {
          const prevVisible = getNextVisibleIndex(currentSlideIndex, -1);
          showSlide(prevVisible);
        }
      });
      nextArrow?.addEventListener('click', () => {
        if (filteredIndexes) {
          filteredCurrent = (filteredCurrent + 1) % filteredIndexes.length;
          showFilteredSlide(filteredIndexes, filteredCurrent);
        } else {
          const nextVisible = getNextVisibleIndex(currentSlideIndex, 1);
          showSlide(nextVisible);
        }
      });
      showSlide(0);
      const busquedaInferior = document.getElementById('busqueda-pokemon-inferior');
      const clearBusqueda = document.getElementById('clear-busqueda');
      if (busquedaInferior) {
        busquedaInferior.addEventListener('input', (e) => {
          const valor = e.target.value.trim().toLowerCase();
          let algunoVisible = false;
          let primerVisibleIndex = -1;
          let visibles = [];
          slides.forEach((slide, idx) => {
            const nombre = slide.querySelector('h2')?.textContent?.toLowerCase() || '';
            if (nombre.includes(valor)) {
              slide.style.display = '';
              visibles.push(idx);
              if (primerVisibleIndex === -1) primerVisibleIndex = idx;
              algunoVisible = true;
            } else {
              slide.style.display = 'none';
            }
            slide.classList.remove('active-slide');
          });
          if (busquedaInferior.value && algunoVisible && primerVisibleIndex !== -1) {
            filteredIndexes = visibles;
            filteredCurrent = 0;
            showFilteredSlide(filteredIndexes, filteredCurrent);
            prevArrow?.classList.remove('oculto-busqueda');
            nextArrow?.classList.remove('oculto-busqueda');
          } else if (!busquedaInferior.value) {
            filteredIndexes = null;
            filteredCurrent = 0;
            slides.forEach(slide => {
              slide.style.display = '';
            });
            showSlide(currentSlideIndex);
            prevArrow?.classList.remove('oculto-busqueda');
            nextArrow?.classList.remove('oculto-busqueda');
          }
          if (clearBusqueda) {
            clearBusqueda.style.display = busquedaInferior.value ? 'block' : 'none';
          }
        });
        if (clearBusqueda) {
          clearBusqueda.addEventListener('click', () => {
            busquedaInferior.value = '';
            filteredIndexes = null;
            filteredCurrent = 0;
            slides.forEach(slide => {
              slide.style.display = '';
            });
            if (slidesContainer) {
              slidesContainer.style.transform = `translateX(0%)`;
            }
            clearBusqueda.style.display = 'none';
            busquedaInferior.focus();
            slides.forEach(slide => slide.classList.remove('active-slide'));
            slides[0].classList.add('active-slide');
            currentSlideIndex = 0;
            prevArrow?.classList.remove('oculto-busqueda');
            nextArrow?.classList.remove('oculto-busqueda');
          });
        }
      }
    }
  }
}
