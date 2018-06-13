import React from'react';
import { Link } from'react-router-dom';
import Menu from '../components/menu/menu';
import Map from '../components/map/map';

const About = () => (
    <section>
        <Menu/>
        <Map/>
        <h3>About</h3>
    </section>
);

export default About;