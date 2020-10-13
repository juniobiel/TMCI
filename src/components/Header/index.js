import React from 'react';
import {Link, useHistory} from 'react-router-dom';

import seta from '../../assets/icons/setaIcon.svg';

import './styles.css';

function Header(props){
    let history = useHistory();
    let link1;
    let link2;

    switch(props.title){
        case "Sobre a TMCI":
            link1 = "services";
            link2 = "contact";
            break;
        case "Nossos Serviços":
            link1 = "about";
            link2 = "contact";
            break;
        case "Contato":
            link1 = "about";
            link2 = "services";
            break;
        default:
            history.push('/');
            break;

    }
    
    return (
        <header id="page-header">
            <h1>{props.title}</h1>

            <nav>
                <Link to={link1} className="navigator">
                    <h3>{props.nav1}</h3>
                    <span>
                        <img src={seta} alt="seta"/>
                    </span>
                </Link>

                <Link to={link2} className="navigator">
                    <h3>{props.nav2}</h3>
                    <span>
                        <img src={seta} alt="seta"/>
                    </span>
                </Link>
            </nav>

        </header>
    );
}

export default Header;