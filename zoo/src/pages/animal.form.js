import React from 'react';
import { Link } from 'react-router-dom';
import Menu from '../components/menu/menu';
import Animal from '../models/animal';
import animals from '../data/zoo-list.data';


class AnimalForm extends React.Component {

    constructor(){
        super();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = new Animal;
    }

    handleInputChange(event){
        const target = event.target;
        const name = target.name;
        let value;

        switch( target.type ) {
            case 'checkbot':
                value = target.checked;
                break;
            case 'file':
                // TODO: Investigar si se puedo borrar la imagen anterior, para no gastar memoria del navegador
                const file = target.files[0];
                this.imgSrc = window.URL.createObjectURL(file);

                // TODO: (1) Convertir a base64 para guardar la imagen en el LocaStorage (Ojo máximo 10MB)
                // TODO: (2) Reducir la talla de la imagen.
                var reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = function () {
                    console.log(reader.result);
                };

                break;
            default:
                value = target.value;
        }

        console.log(value);
        this.setState({[name]: value});
    }

    handleSubmit(event){
        event.preventDefault();
        
        // Guardar el animal en el LocalStorage
        let animals = window.localStorage.getItem('animals');
        animals = JSON.parse(animals);
        animals = animals ? animals:[];
        animals.unshift(this.state);
        animals = JSON.stringify(animals);
        window.localStorage.setItem('animals', animals);
    }

    render() {
        return (
            <section>
                <Menu/>
                <h3>Animal Form</h3>
                <form onSubmit={this.handleSubmit}>
                <label>
                    Nombre:
                    <input  name="name"
                            type="text"                       
                            value={this.state.name}
                            onChange={this.handleInputChange}/>
                </label>
                <label>
                    Foto:
                    <input  name="photo"
                            type="file"
                            onChange={this.handleInputChange}/>
                </label>
                <label>
                    Oviparo:                    
                    <input  name="oviparous"
                            type="checkbox"
                            checked={this.state.oviparous}
                            onChange={this.handleInputChange}/>
                </label>
                <label>
                    Familia:
                    <select name="family"
                            value={this.state.family}                    
                            onChange={this.handleInputChange}>
                            <option value=""></option>
                            <option value="land">Tierra</option>
                            <option value="sea">Mar</option>
                            <option value="air">Aire</option>
                    </select>
                </label>
                <input type="submit" value="Guardar"/>                
			    </form>
                <img id="photo" src={this.imgSrc}/>
            </section>
        )
    }
}

export default AnimalForm;