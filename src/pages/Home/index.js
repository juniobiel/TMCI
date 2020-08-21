import React from 'react';

import logo from '../../assets/images/logomarca.png';

import './styles.css';

function Home(){
    return(
        <div id="container">
            <section id="logo-container">
                <img src={logo} alt=""/>
            </section>
            <section id="menu-container">
                <div id="menu-title">
                    <h1>Serviços de qualidade!</h1>
                </div>
                <div id="about">
                    <h3>Sobre a TMCI</h3>
                </div>
                <div id="jobs">
                    <h3>Nossos Serviços</h3>
                </div>
                <div id="contact">
                    <h3>Contato</h3>
                </div>
            </section>
        </div>
    );
}

export default Home;