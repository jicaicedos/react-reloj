import React from 'react';
import ReactDOM from 'react-dom';

function Reloj() {    
    const element = (
      <div >
        <h2>Hora en Colombia {new Date().toLocaleTimeString()}</h2>
      </div>
    );
    ReactDOM.render(element, document.getElementById('reloj'));
}
  
setInterval(Reloj, 1000);

export default Reloj;