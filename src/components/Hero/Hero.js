import React from 'react';

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

export default Hero;
