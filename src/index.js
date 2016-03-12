import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import * as _ from 'lodash';
import React from 'react';
import { render } from 'react-dom';

const HeroSearch = (props) => {
    return (
        <div className="row">
            <div className="input-field col s12">
                <input id="search" type="text" onChange={props.onChange} />
                <label htmlFor="search">Search Your Hero</label>
            </div>
        </div>
    );
};

class HeroList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            q: props.q || '',
            heroes: [{
                name: 'Adam Warlock',
                img: 'http://i.annihil.us/u/prod/marvel/i/mg/a/f0/5202887448860.jpg'
            }, {
                name: 'Captain America',
                img: 'http://i.annihil.us/u/prod/marvel/i/mg/3/50/537ba56d31087.jpg'
            }, {
                name: 'Wolverine',
                img: 'http://i.annihil.us/u/prod/marvel/i/mg/2/60/537bcaef0f6cf.jpg'
            }, {
                name: 'Iron Man',
                img: 'http://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55.jpg'
            }, {
                name: 'Scarlet Witch',
                img: 'http://i.annihil.us/u/prod/marvel/i/mg/6/70/5261a7d7c394b.jpg'
            }, {
                name: 'The Vision',
                img: 'http://i.annihil.us/u/prod/marvel/i/mg/9/d0/5111527040594.jpg'
            }, {
                name: 'Black Widow',
                img: 'http://i.annihil.us/u/prod/marvel/i/mg/f/30/50fecad1f395b.jpg'
            }]
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            q: nextProps.q
        });
    }

    render() {

        var items = _.chunk(
            this.state.heroes.filter(
                (hero) => hero.name.toUpperCase().indexOf(this.state.q.toUpperCase()) !== -1)
            , 3);

        return (
            <div>
                {
                    items.map((heroes, idx) => {
                        return (
                            <div key={idx} className="row">
                                {
                                    heroes.map((hero, idx) => <Hero key={idx} name={hero.name} img={hero.img} />)
                                }
                            </div>
                        )
                    })
                }
            </div>
        )
    }

}

const Hero = (props) => {
    return (
        <div className="col s12 m4">
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src={props.img} />
                </div>
                <div className="card-content">
                    <span className="card-title activator flow-text">{props.name}</span>
                </div>
                <div className="card-reveal">
                    <span className="card-title grey-text text-darken-4">{props.name}</span>
                    <p>Description and stuff</p>
                </div>
            </div>
        </div>
    );
};

class HerosApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            q: ''
        }
    }

    onHeroSearched(e) {
        this.setState({
            q: e.target.value
        });
    }

    render() {
        return (
            <div>
                <HeroSearch onChange={this.onHeroSearched.bind(this)} />
                <HeroList q={this.state.q} />
            </div>
        );
    }
}

const root = document.querySelector('#app');
render(<HerosApp />, root);