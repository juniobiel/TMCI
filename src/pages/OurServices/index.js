import React from 'react';
import {FcDownload} from 'react-icons/fc';

import Header from '../../components/Header';
import ServiceArea from '../../components/ServiceArea';

import cartilha from '../../assets/TMCI Eletrica.pdf';

import './styles.css';

function Services(){
    return(
        <div id="services-container">
            <Header title="Nossos Serviços" nav1="Sobre a TMCI" nav2="Contato" />
            <section className="thumbnail">
                <h1>Baixe a cartilha de serviços</h1>
                <a href={cartilha} alt="Portifólio de serviços" target="_blank" rel="noopener noreferrer" >
                    <FcDownload size={100}/>
                </a>
            </section>

            <ServiceArea 
            title="Sistemas Elétricos" 
            p1="Instalação e manutenção em sistemas elétricos em geral" 
            p2="Fiação, cabeamento, estação de energia, quadros elétricos, etc."
            />

            <ServiceArea 
            title="Sistemas de Ar" 
            p1="Instalação, manutenção e limpeza em sistemas de ar" 
            p2="Dutos, ar-condicionado, ventilação, entre outros."
            />

            <ServiceArea 
            title="Sistemas de Segurança" 
            p1="Instalação e manutenção em sistemas de segurança" 
            p2="Sistemas CFTV, câmeras, vigilância e mais."
            />

            <ServiceArea 
            title="Sistemas de Rede e Voz" 
            p1="Instalação e manutenção em sistemas de redes e telefonia" 
            p2="Fiação, cabeamento, raques, infraestrutura, intranet, etc."
            />

            <ServiceArea 
            title="Sistemas Projetos e Obras" 
            p1="Projetar e construir" 
            p2="Construção do início ao acabamento, pintura, instalação, demolição, e muito mais."
            />
            
        </div>
    );
}

export default Services;