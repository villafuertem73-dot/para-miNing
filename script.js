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
}

// FUNCION MOSTRAR MENSAJE DE FLORES
function showMessage(msg) {
  document.getElementById('flower-message').innerText = msg;
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
