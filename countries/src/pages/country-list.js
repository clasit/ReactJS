import React from'react';
import { Link } from'react-router-dom';
import Menu from '../components/menu/menu';



class CountryList extends React.Component{

    url = 'http://services.groupkt.com/country/get/all';

    constructor(props){
        super(props);        
        this.state = {countries: []};
    }

    componentDidMount(){
        fetch(this.url)
            .then((response) => response.json())
            .then((json) => {
                /*--------------------------------------------------
                 * PRUEBA: Se define un timeout que cambia el nombre
                 * del primer pais. "this.setState" hace que se lance
                 * el renderizado.
                 --------------------------------------------------*/
                setTimeout(() => {
                    this.state.countries[0].name = 'Valencia';
                    this.setState({countries: this.state.countries});                    
                }, 3000);
                //--------------------------------------------------

                this.setState({countries: json.RestResponse.result});
            })
    }

    render() {
        return (
            <section>{ 
                this.state.countries.map(
                    (country) => <p>{country.name}</p>
                )}
            </section>
        );
    }
}

export default CountryList;