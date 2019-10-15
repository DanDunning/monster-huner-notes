import React from 'react';

function Hero(props) {
    return (
        <section id="backtotop" className="hero is-primary">
            <div className="hero-body">
                <div className="container is-fluid">
                    <h1 className="title">
                        {props.title}
                    </h1>
                    <h2 className="subtitle">
                        {props.subtitle}
                     </h2>
                </div>
            </div>
        </section>
    )
}

export default Hero;