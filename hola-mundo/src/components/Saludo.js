import React, {Component} from 'react';

const logoInaem = 'https://www.mecd.gob.es/.imaging/mecd-imgtotal-jpg/dms/mecd/cultura-mecd/areas-cultura/artesescenicas/logo-inaem-cabecera2.jpg';

class Saludar extends React.Component {
    render() {
        return (
          <div>
            <figure>
              <img src={logoInaem}/>
            </figure>
            <form>
              <input type="text"/>
              <input type="button" value="Enviar"/>
            </form>
            <footer>
              <h5>Mi primer componente</h5>
            </footer>
          </div>
        );
      }
}

export default Saludar;