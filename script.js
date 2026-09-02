var currentCode = "";
var SECRET_CODE = "111111";

// FUNCIONES DEL CÓDIGO PIN
function pressKey(num) {
  if (currentCode.length < 6) {
    currentCode = currentCode + num;
    updateDots();
  }
}

function clearKey() {
  currentCode = "";
  updateDots();
}

function updateDots() {
  var dots = document.querySelectorAll('.dot');
  for (var i = 0; i < dots.length; i++) {
    if (i < currentCode.length) {
      dots[i].classList.add('active');
    } else {
      dots[i].classList.remove('active');
    }
  }
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
  
  // Activa el audio del navegador para móviles al tocar la caja de regalo
  var player = document.getElementById('audio-player');
  if (player) {
    player.play().then(function() {
      player.pause();
    }).catch(function(e) {
      console.log("Audio listo para reproducciones");
    });
  }
}

// FUNCION MOSTRAR MENSAJE DE FLORES
function showMessage(msg) {
  document.getElementById('flower-message').innerText = msg;
}

// REPRODUCTOR DE MÚSICA
var songs = [
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

var currentSongIndex = -1;

function playSong(index) {
  var player = document.getElementById('audio-player');
  var allCards = document.querySelectorAll('.song-card');
  var allBtns = document.querySelectorAll('.play-btn');

  // Si se toca la canción que ya está sonando
  if (currentSongIndex === index) {
    if (player.paused) {
      player.play().then(function() {
        document.getElementById('song-' + index).classList.add('active');
        document.getElementById('btn-' + index).innerText = "❚❚";
      });
    } else {
      player.pause();
      document.getElementById('song-' + index).classList.remove('active');
      document.getElementById('btn-' + index).innerText = "▶️";
    }
    return;
  }

  // Limpiar estilos anteriores
  for (var k = 0; k < allCards.length; k++) {
    allCards[k].classList.remove('active');
  }
  for (var m = 0; m < allBtns.length; m++) {
    allBtns[m].innerText = "▶️";
  }

  // Cargar y reproducir la nueva canción
  currentSongIndex = index;
  player.src = songs[index].url;
  
  var promise = player.play();
  if (promise !== undefined) {
    promise.then(function() {
      document.getElementById('song-' + index).classList.add('active');
      document.getElementById('btn-' + index).innerText = "❚❚";
    }).catch(function(error) {
      alert("No se pudo reproducir la canción. Revisa que el archivo " + songs[index].url + " esté subido a GitHub en la misma carpeta.");
    });
  }
}

// RAZONES DEL FRASCO INTERACTIVO
var reasons = [
  "Tu sonrisa siempre ilumina cualquier día difícil. 💛",
  "Aprecio mucho la amabilidad y el corazón tan lindo que tienes. ✨",
  "Cada momento a tu lado siempre se siente especial. 🌻",
  "Gracias por estar presente y traer tanta alegría. 🎈",
  "Te mereces todo lo bonito que el mundo tiene para ofrecer. 🌸"
];

function getRandomReason() {
  var randomIndex = Math.floor(Math.random() * reasons.length);
  document.getElementById('jar-note').innerText = reasons[randomIndex];
}
