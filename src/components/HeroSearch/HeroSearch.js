import React from 'react';

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

export default HeroSearch;
