const pintarObrasIndex = (obraPpal) => {
    const contenedorIndex = document.getElementById('contenedor-index')
    
    const divIndex = document.createElement('div');
    divIndex.classList.add('container-fluid', 'my-4', 'row'); 
    
    divIndex.innerHTML = `
        <h1 class="wow fadeInDown" data-wow-duration="2s">ANIMAL TEATRO</h1>
        <h2 class="wow fadeInDown" data-wow-duration="2s">PROGRAMACIÓN</h2>

            <article class="col-sm-12 col-md-6 col-lg-3 mb-2">
              <div class="card">
                <a href=" ${obraPpal.link}" target="_blank">
                  <img src="${obraPpal.img}" class="card-img-top w-100" alt=" ${obraPpal.alt}">  
                </a>                        
              </div>
            </article>
    `
    contenedorIndex.appendChild(divIndex)
  }