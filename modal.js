// modal.js
export function showModal() {
    // Crear el modal
    let modal = document.createElement('div');
    modal.id = 'myModal';
    modal.innerHTML = `
      <div class="modal-content">
        <p>¿Está seguro que desea ver las demás secciones?</p>
        <button id="aceptar">Aceptar</button>
        <button id="cancelar">Cancelar</button>
      </div>
    `;
    document.body.appendChild(modal);
  
    // Evento para el botón Aceptar
    document.getElementById('aceptar').addEventListener('click', function() {
      // Remover el modal
      modal.remove();
      // Remover el botón "Ver más"
      document.getElementById('verMasButton').remove();
      // Mostrar los botones "Servicios" y "Colaboradores"
      document.getElementById('section1').style.display = 'block';
      document.getElementById('section2').style.display = 'block';
      // Mostrar las secciones "Servicios" y "Colaboradores"
      document.getElementById('servicios').style.display = 'block';
      document.getElementById('colaboradores').style.display = 'block';
    });
  
    // Evento para el botón Cancelar
    document.getElementById('cancelar').addEventListener('click', function() {
      // Ocultar el modal
      modal.style.display = 'none';
    });
  }
  
  