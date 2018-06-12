import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import React, { Component } from 'react';

import MenuSlider from './views/menu/menu';  
ReactDOM.render(<MenuSlider />, document.getElementById("root"));

/*
import MenuAbanico from './components/menuabanico/menuabanico';
ReactDOM.render(<MenuAbanico/>, document.getElementById('root'));
*/