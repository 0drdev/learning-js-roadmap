const preguntas = [
  {
    pregunta: '¿Cuál es el resultado de typeof null en JavaScript?',
    opciones: ['null', 'undefined', 'object', 'number'],
    correcta: 2
  },
  {
    pregunta: '¿Qué método de array NO modifica el array original?',
    opciones: ['push()', 'splice()', 'map()', 'sort()'],
    correcta: 2
  },
  {
    pregunta: '¿Cuál es la diferencia entre == y ===?',
    opciones: [
      'No hay diferencia',
      '=== compara valor y tipo, == solo valor',
      '== compara valor y tipo, === solo valor',
      '=== es más lento'
    ],
    correcta: 1
  },
  {
    pregunta: '¿Qué devuelve [1,2,3].reduce((acc, n) => acc + n, 0)?',
    opciones: ['0', '123', '6', 'undefined'],
    correcta: 2
  },
  {
    pregunta: '¿Qué es el hoisting en JavaScript?',
    opciones: [
      'Un método de array',
      'Mover declaraciones al inicio del scope antes de ejecutar',
      'Una forma de herencia',
      'Un operador lógico'
    ],
    correcta: 1
  },
  {
    pregunta: '¿Cuál de estas formas declara una constante en JS moderno?',
    opciones: ['var x = 1', 'let x = 1', 'const x = 1', 'def x = 1'],
    correcta: 2
  },
  {
    pregunta: '¿Qué hace el operador spread (...)?',
    opciones: [
      'Elimina elementos de un array',
      'Expande un iterable en elementos individuales',
      'Crea una copia profunda de un objeto',
      'Filtra valores falsy'
    ],
    correcta: 1
  },
  {
    pregunta: '¿Qué devuelve fetch()?',
    opciones: ['Los datos directamente', 'Una Promise', 'Un callback', 'Un Observable'],
    correcta: 1
  },
  {
    pregunta: '¿Cuál es el resultado de Boolean("")?',
    opciones: ['true', 'false', 'undefined', 'null'],
    correcta: 1
  },
  {
    pregunta: '¿Qué hace localStorage.setItem("k", "v")?',
    opciones: [
      'Lee un valor del storage',
      'Elimina un valor del storage',
      'Guarda un par clave-valor en el navegador',
      'Crea una cookie'
    ],
    correcta: 2
  }
]

let indice = 0
let puntaje = 0
let temporizadorId = null
let segundos = 30

const pantallas = {
  inicio: document.getElementById('pantalla-inicio'),
  quiz: document.getElementById('pantalla-quiz'),
  resultado: document.getElementById('pantalla-resultado')
}

function mostrar(pantalla) {
  Object.values(pantallas).forEach(p => p.classList.add('oculto'))
  pantallas[pantalla].classList.remove('oculto')
}

function iniciar() {
  indice = 0
  puntaje = 0
  mostrar('quiz')
  mostrarPregunta()
}

function mostrarPregunta() {
  const q = preguntas[indice]
  document.getElementById('progreso').textContent = `Pregunta ${indice + 1} de ${preguntas.length}`
  document.getElementById('barra-fill').style.width = `${((indice) / preguntas.length) * 100}%`
  document.getElementById('pregunta').textContent = q.pregunta

  const opciones = document.getElementById('opciones')
  opciones.innerHTML = ''
  q.opciones.forEach((texto, i) => {
    const btn = document.createElement('button')
    btn.className = 'opcion'
    btn.textContent = texto
    btn.addEventListener('click', () => responder(i))
    opciones.appendChild(btn)
  })

  iniciarTemporizador()
}

function iniciarTemporizador() {
  clearInterval(temporizadorId)
  segundos = 30
  document.getElementById('temporizador').textContent = `${segundos}s`

  temporizadorId = setInterval(() => {
    segundos--
    document.getElementById('temporizador').textContent = `${segundos}s`
    if (segundos <= 0) {
      clearInterval(temporizadorId)
      responder(-1)
    }
  }, 1000)
}

function responder(indiceRespuesta) {
  clearInterval(temporizadorId)
  const q = preguntas[indice]
  const botones = document.querySelectorAll('.opcion')

  botones.forEach(btn => btn.disabled = true)
  botones[q.correcta].classList.add('correcta')

  if (indiceRespuesta === q.correcta) {
    puntaje++
  } else if (indiceRespuesta >= 0) {
    botones[indiceRespuesta].classList.add('incorrecta')
  }

  setTimeout(() => {
    indice++
    if (indice < preguntas.length) {
      mostrarPregunta()
    } else {
      mostrarResultado()
    }
  }, 1000)
}

function mostrarResultado() {
  mostrar('resultado')
  document.getElementById('barra-fill').style.width = '100%'
  const porcentaje = Math.round((puntaje / preguntas.length) * 100)
  document.getElementById('puntaje').textContent = `${puntaje} / ${preguntas.length}`

  const niveles = [
    { min: 90, emoji: '🏆', titulo: '¡Excelente!', mensaje: 'Dominas JavaScript como un pro.' },
    { min: 70, emoji: '🎯', titulo: '¡Muy bien!', mensaje: 'Tienes una base sólida.' },
    { min: 50, emoji: '📚', titulo: 'Bien', mensaje: 'Vas por buen camino, sigue practicando.' },
    { min: 0,  emoji: '💪', titulo: '¡Sigue adelante!', mensaje: 'Cada intento te hace mejor.' }
  ]

  const nivel = niveles.find(n => porcentaje >= n.min)
  document.getElementById('emoji-resultado').textContent = nivel.emoji
  document.getElementById('titulo-resultado').textContent = nivel.titulo
  document.getElementById('mensaje-resultado').textContent = nivel.mensaje

  guardarEnStorage(puntaje)
}

function guardarEnStorage(pts) {
  const mejor = parseInt(localStorage.getItem('mejor-puntaje') || '0')
  if (pts > mejor) localStorage.setItem('mejor-puntaje', pts)
}

document.getElementById('btn-iniciar').addEventListener('click', iniciar)
document.getElementById('btn-reiniciar').addEventListener('click', iniciar)