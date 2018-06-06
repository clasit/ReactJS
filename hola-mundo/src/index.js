import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Saludar from './components/Saludo';
import BallGame from './components/BallGame';

// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Saludar />, document.getElementById('saludar'));
ReactDOM.render(<BallGame />, document.getElementById('ballgame'));
registerServiceWorker();
