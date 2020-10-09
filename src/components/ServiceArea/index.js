import React from 'react';

import './styles.css';

function ServiceArea(props){
    return(
        <div className="service">
            <section className="service-title">
                <h2>{props.title}</h2>
            </section>
            <section className="service-description">
                <p>
                    {props.p1}
                </p>

                <p>
                    {props.p2}
                </p>
            </section>
        </div>
    );
}

export default ServiceArea;