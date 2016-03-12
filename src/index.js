import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import React from 'react';
import { render } from 'react-dom';
import HeroApp from './components/HeroApp/HeroApp';

const root = document.querySelector('#app');
render(<HeroApp />, root);