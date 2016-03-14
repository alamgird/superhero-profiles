import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import React from 'react';
import HeroApp from './components/HeroApp/HeroApp';
import { render } from 'react-dom';

const root = document.querySelector('#app');
render(<HeroApp />, root);



