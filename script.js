let currentCode = "";
const SECRET_CODE = "111111";

// FUNCIONES DEL CÓDIGO PIN
function pressKey(num) {
  if (currentCode.length < 6) {
    currentCode += num;
    updateDots();
  }
}

function clearKey() {
  currentCode = "";
  updateDots();
}

function updateDots() {
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, index) => {
    if (index < currentCode.length) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

function submitCode() {
  if (currentCode === SECRET_CODE) {
    document.getElementById('pin-screen').classList.add('hidden');
    document.getElementById('gift-screen').classList.remove('hidden');
  } else {
    alert("Código incorrecto, intenta de nuevo 💛");
    clearKey();
  }
}

// FUNCION ABRIR REGALO
function openGift() {
  document.getElementById('gift-screen').classList.add('hidden');
  document.getElementById('main-screen').classList.remove('hidden');
}

// FUNCION MOSTRAR MENSAJE DE FLORES
function showMessage(msg) {
  document.getElementById('flower-message').innerText = msg;
}

// REPRODUCTOR DE MÚSICA
const songs = [
  {
    title: "Opera House",
    artist: "Cigarettes After Sex",
    url: "opera-house.mp3" 
  },
  {
    title: "Cherry Waves",
    artist: "Deftones",
    url: "cherry-waves.mp3"
  },
  {
    title: "Ultraviolence",
    artist: "Lana Del Rey",
    url: "ultraviolence.mp3"
  }
];

let currentSongIndex = -1;

function playSong(index) {
  const player = document.getElementById('audio-player');
  const allCards = document.querySelectorAll('.song-card');
  const allBtns = document.querySelectorAll('.play-btn');

  // Si hace clic en la canción que ya está sonando
  if (currentSongIndex === index) {
    if (player.paused) {
      player.play();
      document.getElementById(song-${index}).classList.add('active');
      document.getElementById(btn-${index}).innerText = "❚❚";
    } else {
      player.pause();
      document.getElementById(song-${index}).classList.remove('active');
      document.getElementById(btn-${index}).innerText = "▶️";
    }
    return;
  }

  // Limpiar estilos anteriores
  allCards.forEach(card => card.classList.remove('active'));
  allBtns.forEach(btn => btn.innerText = "▶️");

  // Asignar nueva canción
  currentSongIndex = index;
  player.src = songs[index].url;
  player.load();

  // Intentar reproducir
  const playPromise = player.play();
  if (playPromise !== undefined) {
    playPromise.then(() => {
      document.getElementById(song-${index}).classList.add('active');
      document.getElementById(btn-${index}).innerText = "❚❚";
    }).catch(error => {
      console.log("Error al reproducir audio:", error);
      alert("Haz clic directamente en el reproductor gris de arriba si el navegador bloquea el reproductor automático.");
    });
  }
}
