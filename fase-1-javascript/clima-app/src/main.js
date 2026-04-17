const API_KEY = import.meta.env.VITE_API_KEY
console.log('API KEY:', import.meta.env.VITE_API_KEY)
const API_URL = 'https://api.openweathermap.org/data/2.5/weather'

const inputCiudad = document.getElementById('input-ciudad')
const btnBuscar = document.getElementById('btn-buscar')
const tarjeta = document.getElementById('tarjeta')
const errorEl = document.getElementById('error')

async function buscarClima(ciudad) {
  try {
    mostrarEstado('cargando')

    const res = await fetch(
      `${API_URL}?q=${ciudad}&appid=${API_KEY}&units=metric&lang=es`
    )

    if (!res.ok) throw new Error('Ciudad no encontrada')

    const datos = await res.json()
    mostrarClima(datos)
  } catch (error) {
    mostrarEstado('error')
  }
}

function mostrarClima(datos) {
  document.getElementById('ciudad').textContent = datos.name
  document.getElementById('pais').textContent = datos.sys.country
  document.getElementById('temperatura').textContent = `${Math.round(datos.main.temp)}°C`
  document.getElementById('descripcion').textContent = datos.weather[0].description
  document.getElementById('sensacion').textContent = `${Math.round(datos.main.feels_like)}°C`
  document.getElementById('humedad').textContent = `${datos.main.humidity}%`
  document.getElementById('viento').textContent = `${Math.round(datos.wind.speed)} m/s`
  document.getElementById('icono').src =
    `https://openweathermap.org/img/wn/${datos.weather[0].icon}@2x.png`

  mostrarEstado('resultado')
}

function mostrarEstado(estado) {
  tarjeta.classList.add('oculto')
  errorEl.classList.add('oculto')
  if (estado === 'resultado') tarjeta.classList.remove('oculto')
  if (estado === 'error') errorEl.classList.remove('oculto')
}

btnBuscar.addEventListener('click', () => {
  const ciudad = inputCiudad.value.trim()
  if (ciudad) buscarClima(ciudad)
})

inputCiudad.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const ciudad = inputCiudad.value.trim()
    if (ciudad) buscarClima(ciudad)
  }
})