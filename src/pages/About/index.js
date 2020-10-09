import React from 'react';

import Header from '../../components/Header';

import marca from '../../assets/images/tmciStyled.svg';


import './styles.css';

function About(){
    return(
        <div id="about-container">
            <Header title="Sobre a TMCI" nav1="Nossos Serviços" nav2="Contato" />
            
            <section id="about-section">
                <img src={marca} alt="Logomarca"/>
                <section>
                    <p>
                        A TMCI é uma empresa  de prestação de serviços e mão de obra capacitada, 
                        que visa atender projetos de manutenção e instalações elétrica para o
                        setor industrial, empresarial e residencial, 
                        fornecendo materiais e tecnologias de qualidade na 
                        execução de nossos serviços, propiciando tranquilidade e 
                        satisfação de nossos clientes. 
                    </p>
                </section>
            </section>

            <section id="history-section">
                <div id="history-title">
                    <h2>Nossa História</h2>
                </div>

                <section>
                    <p>
                        Com a crescente demanda por mão de obra capacitada e a 
                        necessidade de atender o mercado, surge em 2017 a TMCI, 
                        contando com a centralização da mão de obra capacitada 
                        de nossos colaboradores e focando na captação e execução 
                        de projetos para ser referência de qualidade.
                    </p>
                    <p>
                        Nestes três anos de atuação, 
                        a TMCI conta com uma cartela de clientes e serviços 
                        executados que refletem o sucesso de nossas atuações.
                    </p>
                    <p>
                        Conheça nossos pilares
                    </p>
                </section>
            </section>

            <section id="pillars">
                <div className="pillar-title">
                    <h2>Missão</h2>
                </div>

                <section className="pillar-body">
                    <p>
                        Atuar na realização de projetos e soluções atendendo as 
                        principais demandas fornecendo confiança e qualidade. 
                    </p>
                </section>

                <div className="pillar-title">
                    <h2>Visão</h2>
                </div>

                <section className="pillar-body">
                    <p>
                        Se tornar referência na execução e prestação de serviços, 
                        atribuindo mão de obra capacitada e entregando qualidade 
                        aos nossos clientes.
                    </p>
                </section>

                <div className="pillar-title">
                    <h2>Valores</h2>
                </div>

                <section className="pillar-body">
                    <p>
                        Honestidade, transparência e qualidade. 
                        Estes são os principais valores que moldam toda 
                        a atuação da TMCI.
                    </p>
                </section>

                
            </section>


        </div>
    );
}

export default About;