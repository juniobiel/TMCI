import React from 'react';
import {Container, Content} from './styles.js';


export default function Contato() {
    return(
        <Container maxWidth="lg">
            <Content>
                <section>
                    <div></div>
                    <p>Site em construção, encaminhe sua solicitação que em breve entraremos em contato!</p>
                </section>
                <form>
                    <input name="nome" placeholder="Nome"/>
                    <input type="email" name="email" placeholder="E-mail" />
                    <input name="whatsApp" placeholder="WhatsApp" />
                    <textarea name="mensagem" placeholder="Digite sua mensagem"></textarea>

                    <button type="submit">Enviar</button>
                </form>
            </Content>
        </Container>
        
    );
}