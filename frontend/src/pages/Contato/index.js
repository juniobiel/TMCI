import React from 'react';
import {Container, Content, Form} from './styles.js';
import Logo from '../../assets/Logomarca_TMCI.png';


export default function Contato() {
    return(
        <Container maxWidth="lg">
            <Content>
                <section>
                    <div id="logo-image">
                        <img src={Logo} alt="TMCI" />
                    </div>
                    <p>Site em construção!</p>
                    <p>Encaminhe sua solicitação que em breve entraremos em contato!</p>
                </section>
                <Form>
                    <input name="nome" placeholder="Nome"/>
                    <input type="email" name="email" placeholder="E-mail" />
                    <input name="whatsApp" placeholder="WhatsApp" />
                    <textarea name="mensagem" placeholder="Digite sua mensagem"></textarea>

                    <button type="submit">Enviar</button>
                </Form>
            </Content>
        </Container>
        
    );
}