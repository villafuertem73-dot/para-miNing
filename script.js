// REPRODUCTOR DE MÚSICA CORREGIDO
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

function playSong(index, element) {
  const player = document.getElementById('audio-player');
  const allCards = document.querySelectorAll('.song-card');

  // Si tocamos la misma canción que está sonando
  if (currentSongIndex === index) {
    if (player.paused) {
      player.play().catch(e => console.log("Error al reproducir:", e));
      element.classList.add('active');
    } else {
      player.pause();
      element.classList.remove('active');
    }
    return;
  }

  // Quita el estado activo de las demás tarjetas
  allCards.forEach(card => card.classList.remove('active'));

  // Carga y reproduce la nueva canción
  currentSongIndex = index;
  player.src = songs[index].url;
  player.load();
  player.play().then(() => {
    element.classList.add('active');
  }).catch(error => {
    console.log("No se pudo cargar el audio:", error);
    alert("No se pudo reproducir la canción. Asegúrate de que el archivo " + songs[index].url + " esté subido en GitHub.");
  });
}
