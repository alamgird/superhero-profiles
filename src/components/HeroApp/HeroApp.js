import React from 'react';
import HeroSearch from '../HeroSearch/HeroSearch';
import HeroList from '../HeroList/HeroList';

class HeroApp extends React.Component {

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
            <div className="app-container">
                <HeroSearch onChange={this.onHeroSearched.bind(this)} />
                <HeroList q={this.state.q} />
            </div>
        );
    }
}

export default HeroApp;
