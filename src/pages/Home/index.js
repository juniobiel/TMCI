import React from 'react';
import {Link} from 'react-router-dom';

import logo from '../../assets/images/logomarca.png';
import seta from '../../assets/icons/setaIcon.svg';

import './styles.css';

function Home(){
    return(
        <div id="container">
            <section id="logo-container">
                <img src={logo} alt="Logomarca"/>
            </section>
            <section id="menu-container">
                <div id="menu-title">
                    <h1>Serviços de qualidade!</h1>
                </div>
                <Link to="about">
                    <div className="menu-item">

                            <h3>Sobre a TMCI</h3>
                            <img src={seta} alt="Icone seta" /> 
                    </div>
                </Link>

                <Link to="services">
                    <div className="menu-item">
                        
                            <h3>Nossos Serviços</h3>
                            <img src={seta} alt="Icone seta" /> 
                                        
                    </div>
                </Link>
                <Link to="contact">
                    <div className="menu-item">

                        <h3>Contato</h3>
                        <img src={seta} alt="Icone seta" /> 
                    
                    </div>
                </Link>
            </section>
        </div>
    );
}

export default Home;