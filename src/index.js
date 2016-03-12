import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import 'lodash';
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
                img: 'http://i.annihil.us/u/prod/marvel/i/mg/a/f0/5202887448860.jpg',
                story: 'Adam Warlock is an artificially created human who was born in a cocoon at a scientific complex called The Beehive.'
            }, {
                name: 'Captain America',
                img: 'http://i.annihil.us/u/prod/marvel/i/mg/3/50/537ba56d31087.jpg',
                story: 'Vowing to serve his country any way he could, young Steve Rogers took the super soldier serum to become America\'s one-man army. Fighting for the red, white and blue for over 60 years, Captain America is the living, breathing symbol of freedom and liberty.'
            }, {
                name: 'Wolverine',
                img: 'http://i.annihil.us/u/prod/marvel/i/mg/2/60/537bcaef0f6cf.jpg',
                story: 'Born with super-human senses and the power to heal from almost any wound, Wolverine was captured by a secret Canadian organization and given an unbreakable skeleton and claws. Treated like an animal, it took years for him to control himself. Now, he\'s a premiere member of both the X-Men and the Avengers.'
            }, {
                name: 'Iron Man',
                img: 'http://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55.jpg',
                story: 'Wounded, captured and forced to build a weapon by his enemies, billionaire industrialist Tony Stark instead created an advanced suit of armor to save his life and escape captivity. Now with a new outlook on life, Tony uses his money and intelligence to make the world a safer, better place as Iron Man.'
            }, {
                name: 'Scarlet Witch',
                img: 'http://i.annihil.us/u/prod/marvel/i/mg/6/70/5261a7d7c394b.jpg',
                story: 'Not Available'
            }, {
                name: 'The Vision',
                img: 'http://i.annihil.us/u/prod/marvel/i/mg/9/d0/5111527040594.jpg',
                story: 'The metal monstrosity called Ultron created the synthetic humanoid known as the Vision from the remains of the original android Human Torch of the 1940s to serve as a vehicle of vengeance against the Avengers.'
            }, {
                name: 'Black Widow',
                img: 'http://i.annihil.us/u/prod/marvel/i/mg/f/30/50fecad1f395b.jpg',
                story: 'Not Available'
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
                                    heroes.map((hero, idx) => <Hero key={idx} name={hero.name} img={hero.img} story={hero.story} />)
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
                    <span className="card-title white-text text-darken-4">{props.name}</span>
                    <p>{props.story}</p>
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