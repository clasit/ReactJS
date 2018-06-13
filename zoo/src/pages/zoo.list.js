import React from'react';
import { Link } from'react-router-dom';
import Menu from '../components/menu/menu';
import animals from '../data/zoo-list.data';


class ZooList extends React.Component {

    /*
     * METODO 1 "Paso de parámetros"
     * Se puede usar: this.selectAnimalMethod1.bind(this, animal)
     * O las arrow functions: () => this.selectAnimalMethod1(animal)
     * 
     * NOTA: Se supone que es poco eficiente si hay un bucle, puesto que el bind
     * se ejecuta múltiples veces. Pero es la manera de pasar parámetros.
     * Supuestamente si se hace el bind en el constructor o se usa un atribujto arrow function de la clase
     * no permite el paso de parámetros.
     */
    selectAnimalMethod1(animal){
        console.log(animal);
    }

    /*
     * METODO 2 "Paso de parámetros"
     * Se pasan los parametros con un atributo data-*
     * Esto sirve para parámetros simples, en caso contrario tendremos que serializar y deserializar
     * el objeto. Además como lo pone dentro del html, se muestra el objeto en el html.
     */
    selectAnimalMethod2(e){        
        const animal = JSON.parse(e.target.dataset.animal);
        console.log(animal);
    }

    render() {
        return (
            <section>
                <Menu/>
                <h3>ZooList</h3>
                { animals.map(
                    animal =>
                        <article key={animal.id}>
                            <Link to={'/animal/${animal.id}'}>
                                <h4>{animal.title}</h4>                                                    
                            </Link>                            
                            <h4 onClick={this.selectAnimalMethod1.bind(this, animal)}>
                                <b>Método 1.1</b> {animal.title}
                            </h4>
                            <h4 onClick={() => this.selectAnimalMethod1(animal)}>
                                <b>Método 1.2</b> {animal.title}
                            </h4>
                            <h4 data-animal={JSON.stringify(animal)} onClick={this.selectAnimalMethod2}>
                                <b>Método 2</b> {animal.title}
                            </h4>
                            <p>{animal.excerpt}</p>
                            <span>{animal.author}</span>
                        </article>
                    )
                }
            </section>
        );
    }
}

export default ZooList;
