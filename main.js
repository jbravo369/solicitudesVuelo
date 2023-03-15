

 function mostrarValor() {

  localStorage.setItem('nSol', document.getElementById('nSol').value);

  window.location.href = 'asignacion_vuelo.html';
      
      }

      window.addEventListener('load', function() {

      // Obtenemos el valor del almacenamiento local con la clave "nSol"
      const nSol = localStorage.getItem('nSol');

      // Si el valor existe, lo asignamos al menú desplegable "solicitud"
      if (nSol) {
        document.getElementById('solicitud').value = nSol;
      }

    });





