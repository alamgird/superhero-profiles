import 'lodash';
import React from 'react';
import Hero from '../Hero/Hero';
import HeroService from '../../services/HeroService';

class HeroList extends React.Component {

    constructor(props) {
        super(props);
        this.service = new HeroService();
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
            }, {
                name: 'Spiderman',
                img: 'http://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b.jpg',
                story: 'itten by a radioactive spider, high school student Peter Parker gained the speed, strength and powers of a spider. Adopting the name Spider-Man, Peter hoped to start a career using his new abilities. Taught that with great power comes great responsibility, Spidey has vowed to use his powers to help people.'
            }, {
                name: 'Storm',
                img: 'http://i.annihil.us/u/prod/marvel/i/mg/6/40/526963dad214d.jpg',
                story: 'Ororo Monroe is the descendant of an ancient line of African priestesses, all of whom have white hair, blue eyes, and the potential to wield magic.'
            }]
        };
    }

    componentWillMount() {
        //this.service.getHeroes(
        //    (heroes) => this.setState({ heroes: heroes }),
        //    () => console.log(error));
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            q: nextProps.q
        });
    }

    render() {

        var items = _.chunk(this.state.heroes.filter((hero) => hero.name.toUpperCase().indexOf(this.state.q.toUpperCase()) !== -1), 3);

        return (
            <div className="heroes-container">
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

export default HeroList;