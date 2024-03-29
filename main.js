let usuario = "";
let intentos = 0;
let intentosMaximos = 3;
let precioWifi = 29;
let precioMovil = 12;
let resultado = sumar(precioMovil, precioWifi);
fetch('./data.json')
  .then(response => response.json())
  .then(data => {

    const nombrePagina = data.empresa;
    const reseñas = data.reseñas;

    
    const listaReseñas = document.getElementById('testimonial-section');
    reseñas.forEach(reseña => {
      const li = document.createElement('li');
      li.innerHTML = `
        <strong>Usuario:</strong> ${reseña.usuario}<br>
        <<strong>Calificación:</strong> ${reseña.puntuacion}<br>
        <strong>Comentario:</strong> ${reseña.comentario}<br>
        <strong>Fecha:</strong> ${reseña.fecha}
      `;
      listaReseñas.appendChild(li);
    });
  })
  .catch(error => console.error('Error al cargar el archivo JSON', error));

const carrito = JSON.parse(localStorage.getItem(`carrito`)) || [];
  const carritoTable = document.querySelector('#tabla-carrito tbody');
  const comprarTodoButton = document.getElementById('comprar-todo');

  actualizarTablaCarrito();

  carritoTable.addEventListener('click', (event) => {
    if (event.target.classList.contains('eliminar-producto')) {
      const fila = event.target.parentElement.parentElement;
      const nombreProducto = fila.querySelector('td:first-child').textContent;
      eliminarProductoDelCarrito(nombreProducto);
      actualizarTablaCarrito();
    }
  });

  comprarTodoButton.addEventListener('click', () => {
    comprarTodo();
    carrito.length = 0;
    actualizarTablaCarrito();
  });

  function actualizarTablaCarrito() {
    const carritoTable = document.getElementById("carrito-table");
    let total = 0;
    carritoTable.innerHTML = "";
    carrito.forEach((producto) => {
      const fila = document.createElement("tr");
      const celdaProducto = document.createElement("td");
      const celdaPrecio = document.createElement("td");
      const botonEliminar = document.createElement("button");
      botonEliminar.classList.add("eliminar-producto");
      botonEliminar.textContent = "Eliminar";
      celdaProducto.textContent = producto.nombre;
      celdaPrecio.textContent = `$${producto.precio.toFixed(2)}`;
      fila.appendChild(celdaProducto);
      fila.appendChild(celdaPrecio);
      fila.appendChild(botonEliminar);
      carritoTable.appendChild(fila);
      total = sumar(total, producto.precio);
    });
    const totalCarrito = document.getElementById("total-carrito");
    totalCarrito.textContent = `$${total.toFixed(2)}`;
    actualizarTotal();
    localStorage.setItem(`carrito`, JSON.stringify(carrito))
  }

  function actualizarTotal() {
    const precios = document.querySelectorAll('#tabla-carrito tbody tr td:nth-child(2)');
    let total = 0;
    for (let precio of precios) {
      total += parseFloat(precio.textContent.slice(1));
    }
    document.querySelector('#total-carrito').textContent = `$${total.toFixed(2)}`;
  }

  function sumar(a, b) {
    return a + b;
  }

  function eliminarProductoDelCarrito(nombreProducto) {
    const indiceProducto = carrito.findIndex((producto) => {
      return producto.nombre === nombreProducto;
    });
    carrito.splice(indiceProducto, 1);
  }

  function comprarTodo() {
  
  }
function sumar(a, b) {
  return a + b;
}

let boton = document.getElementById("navbar-button");
boton.addEventListener("click", () => {
  while (intentos < intentosMaximos) {
    usuario = prompt("Ingrese su usuario");
    const contraseña = parseInt(prompt("Ingrese su contraseña"));

    if (usuario === "Admin" && contraseña === 123) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Usuario correcto',
        showConfirmButton: false,
        timer: 6500})
      break;
    } else {
      intentos++;
    }
  }

  if (intentos === intentosMaximos) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Superaste el limite de intentos',
      footer: '<a href="">Why do I have this issue?</a>'
    });
  } else {
    if (usuario === "Admin") {
      const nombre = prompt("Ingrese su nombre");
      switch (nombre) {
        case "Agustin":
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Bienvenido Agustin, ¿qué deseas contratar?',
            showConfirmButton: false,
            timer: 6500})
          break;

        case "Florencia":
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Bienvenido Florencia, ¿qué deseas contratar?',
            showConfirmButton: false,
            timer: 6500})
          break;

        case "Juan":
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Bienvenido Juan, ¿qué deseas contratar?',
            showConfirmButton: false,
            timer: 6500})
          break;

        default:
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Bienvenido/a, ¿qué deseas contratar?',
            showConfirmButton: false,
            timer: 6500})
      }
    }
  }
});

document.addEventListener("DOMContentLoaded", () => {
  class Movil {
    constructor(nombre, modelo, precio) {
      this.nombre = nombre;
      this.modelo = modelo;
      this.precio = precio;
    }
  }

  class Tarifas {
    constructor(nombre, precio) {
      this.nombre = nombre;
      this.precio = precio;
    }
  }

  const movil1 = new Movil("Samsung", "s22", 250);
  const movil2 = new Movil("Iphone", "14plus", 350);
  const movil3 = new Movil("Motorola", "Edge 30 ultra", 200);

  const internet = new Tarifas("600mb", 29);
  const gbIlim = new Tarifas("gbIlim", 12);
  const wifiMovil = new Tarifas("1gb, llamdas ilim", 41);



  let boton2 = document.getElementById("btnMoto");

  boton2.addEventListener("click", () => {
    carrito.push(movil3);
    console.log(carrito);
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Agregado al carrito',
      showConfirmButton: false,
      timer: 3500
    })
    actualizarTablaCarrito();
  });

  let boton3 = document.getElementById("btnIphone");

  boton3.addEventListener("click", () => {
    carrito.push(movil2);
    console.log(carrito);
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Agregado al carrito',
      showConfirmButton: false,
      timer: 3500
    })
    actualizarTablaCarrito();
  });

  let boton4 = document.getElementById("btnSamsung");

  boton4.addEventListener("click", () => {
    carrito.push(movil1);
    console.log(carrito);
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Agregado al carrito',
      showConfirmButton: false,
      timer: 3500
    })
    actualizarTablaCarrito();
  });

  let boton5 = document.getElementById("600mb");

  boton5.addEventListener("click", () => {
    carrito.push(internet);
    console.log(carrito);
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Agregado al carrito',
      showConfirmButton: false,
      timer: 3500
    })
    actualizarTablaCarrito();
  });
  let boton6 = document.getElementById(`movilIlimitado`)

  boton6.addEventListener("click", () => {
    carrito.push(gbIlim);
    console.log(carrito);
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Agregado al carrito',
      showConfirmButton: false,
      timer: 3500
    })
    actualizarTablaCarrito();
  })

  let boton7 = document.getElementById(`wifiYmovil`)

  boton7.addEventListener("click", () =>{
    carrito.push(wifiMovil);
    console.log(carrito);
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Agregado al carrito',
      showConfirmButton: false,
      timer: 3500
    })
    actualizarTablaCarrito();
  })
    
});