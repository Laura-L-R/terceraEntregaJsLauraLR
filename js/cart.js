let carrito = JSON.parse(localStorage.getItem ("obrasCompradas")) || []
console.log(carrito)

const contenedorProgramacion =  document.getElementById("contenedor-programacion-actual")

contenedorProgramacion.addEventListener("click", (e)=>{
    if(e.target.classList.contains("agregar")){
        validarObraEnCarrito(e.target.id)
    }
})

const validarObraEnCarrito = (id)=>{
    const estaRepetido =  carrito.some (obra => obra.id == id)

    if (!estaRepetido){
        const obra = obras.find(obra => obra.id == id)
        carrito.push(obra)
        pintarObraCarrito(obra)
        actualizarTotalesCarrito(carrito)
    }else{
        const obra = carrito.find(obra => obra.id  == id)
        const cantidad = document.getElementById(`cantidad${obra.id}`)
        obra.cantidad++
        cantidad.innerText = `Cantidad: ${obra.cantidad}`
        actualizarTotalesCarrito(carrito)
    }
}

const pintarObraCarrito = () => {
	const contenedor = document.getElementById("carrito-contenedor");
    contenedor.innerHTML = " "

    carrito.forEach((obra) =>{
        const div = document.createElement("div");
        div.classList.add("productoEnCarrito");
    
        div.innerHTML = `
            <p>${obra.titulo} </p>
            <p>$ ${obra.precio}</p>
            <p id=cantidad${obra.id}>Cantidad: ${obra.cantidad}</p>
            <button class="boton-eliminar" id="${obra.id}">X</button>
        `;
        contenedor.appendChild(div);
    } )	
};

//Aquí recibimos la etiqueta button, que en el parámetro lo capturamos como "target", y utilizamos su id para hacer el findIndex. Luego borramos ese elemento del array con el splice. Para borrarlo del DOM se debe eliminar esa etiqueta del modal.

const eliminarObraCarrito = (target) => {
	const obra = carrito.findIndex((producto) => producto.id == target.id);
	carrito.splice(obra, 1);
	target.parentNode.remove(); // Remueve el padre del botón del modal, que es toda la fila del producto que tenemos en el modal
	actualizarTotalesCarrito(carrito);
};

const actualizarTotalesCarrito = (carrito) =>{
    const totalCantidad = carrito.reduce ( (acc, item) => acc + item.cantidad, 0)
    const totalCompra = carrito.reduce ( (acc, item ) => acc + (item.precio * item.cantidad), 0 )
    pintarTotalesCarrito(totalCantidad, totalCompra)
    guardarCarritoStorage(carrito)
}

const pintarTotalesCarrito = (totalCantidad, totalCompra) =>{
    const contadorCarrito = document.getElementById("contador-carrito")
    const precioTotal = document.getElementById("precio-total")

    contadorCarrito.innerText = totalCantidad
    precioTotal.innerText = totalCompra
}

const guardarCarritoStorage = (carrito) =>{
    localStorage.setItem ("obrasCompradas", JSON.stringify(carrito))
}

pintarObraCarrito()
actualizarTotalesCarrito(carrito)