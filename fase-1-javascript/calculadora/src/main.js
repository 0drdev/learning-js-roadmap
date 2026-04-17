let valorActual = '0'
let valorAnterior = ''
let operador = null
let esperandoNuevo = false

const pantalla = document.getElementById('resultado')
const expresion = document.getElementById('expresion')

function actualizar() {
  pantalla.textContent = valorActual
}

function ingresarNumero(num) {
  if (esperandoNuevo) {
    valorActual = num
    esperandoNuevo = false
  } else {
    valorActual = valorActual === '0' ? num : valorActual + num
  }
  actualizar()
}

function ingresarDecimal() {
  if (esperandoNuevo) { 
    valorActual = '0.'; esperandoNuevo = false; 
    return actualizar() 
  }
  if (!valorActual.includes('.')) valorActual += '.'
  actualizar()
}

function seleccionarOperador(op) {
  if (operador && !esperandoNuevo) calcular()
  valorAnterior = valorActual
  operador = op
  esperandoNuevo = true
  expresion.textContent = `${valorAnterior} ${op}`
}

function calcular() {
  if (!operador || esperandoNuevo) return
  const a = parseFloat(valorAnterior)
  const b = parseFloat(valorActual)
  const ops = { '+': a + b, '-': a - b, '*': a * b, '/': a / b }
  expresion.textContent = `${valorAnterior} ${operador} ${valorActual} =`
  valorActual = String(ops[operador] ?? 0)
  operador = null
  esperandoNuevo = true
  actualizar()
}

document.querySelector('.botones').addEventListener('click', (e) => {
  const btn = e.target.closest('button')
  if (!btn) return

  if (btn.dataset.numero !== undefined) return ingresarNumero(btn.dataset.numero)
  if (btn.dataset.operador) return seleccionarOperador(btn.dataset.operador)

  const accion = btn.dataset.accion
  if (accion === 'limpiar') { valorActual = '0'; valorAnterior = ''; operador = null; esperandoNuevo = false; expresion.textContent = ''; actualizar() }
  if (accion === 'decimal') return ingresarDecimal()
  if (accion === 'signo') { valorActual = String(parseFloat(valorActual) * -1); actualizar() }
  if (accion === 'porcentaje') { valorActual = String(parseFloat(valorActual) / 100); actualizar() }
  if (btn.classList.contains('btn-igual')) calcular()
})