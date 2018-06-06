import React from'react';
import { Link } from'react-router-dom';
import Menu from '../components/menu/menu';
import animals from '../data/zoo-list.data';

const ZooList = () => (
    <section>
        <Menu/>
        <h3>ZooList</h3>
        { animals.map(
            animal =>
                <article key={animal.id}>
                    <Link to={'/animal/${animal.id}'}>
                        <h4>{animal.title}</h4>
                    </Link>
                    <p>{animal.excerpt}</p>
                    <span>{animal.author}</span>
                </article>
            )
        }
    </section>
);

export default ZooList;
