const modalContenedor = document.querySelector(".modal-contenedor");
const abrirCarrito = document.getElementById("cesta-carrito");
const cerrarCarrito = document.getElementById("btn-cerrar-carrito");
const modalCarrito = document.querySelector(".modal-carrito");

abrirCarrito.addEventListener("click", () => {
	modalContenedor.classList.toggle("modal-active");
	modalContenedor.classList.toggle("hide");
});

cerrarCarrito.addEventListener("click", () => {
	modalContenedor.classList.toggle("modal-active");
	modalContenedor.classList.toggle("hide");
});

modalContenedor.addEventListener("click", () => {
	cerrarCarrito.click();
});

modalCarrito.addEventListener("click", (e) => {
	e.stopPropagation(); // Para frenar la propagación de hijos hacia padres
	//console.log(e.target);
	if (e.target.classList.contains("boton-eliminar")) {
		eliminarObraCarrito(e.target);
	}
});