import React, { useState } from 'react';
import { ToastContainer ,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import {Container, Content, Form} from './styles.js';
import Logo from '../../assets/Logomarca_TMCI.png';

import api from '../../services/api';

export default function Contato() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [whatsApp, setWhatsApp] = useState();
    const [message, setMessage] = useState();

    async function handleSubmit(e) {
        e.preventDefault();
        document.getElementById("btn-submit").disabled = true;

        const data = {
            userName: name,
            userEmail: email,
            userWhatsApp: whatsApp,
            userMessage: message
        };

        try {
            await api.post('/sendMail', data);

            toast.success('✉ Mensagem enviada com sucesso!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });

        } catch (err) {

            toast.error('Ops! Não conseguimos encaminhar sua solicitação.', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });

            document.getElementById("btn-submit").disabled = false;
        }
        
    }


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

                <Form onSubmit={handleSubmit} autocomplete="off">
                    <input 
                        placeholder="Nome" 
                        value={name} 
                        onChange={e => setName(e.target.value)}
                        required
                    />
                    <input 
                        type="email" 
                        placeholder="E-mail" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                    <input
                        placeholder="WhatsApp" 
                        value={whatsApp}
                        onChange={e => setWhatsApp(e.target.value)}
                    />
                    <textarea 
                        placeholder="Digite sua mensagem" 
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        required>
                    </textarea>

                    <button id="btn-submit" type="submit">Enviar</button>

                    <ToastContainer />
                </Form>
            </Content>
        </Container>
        
    );
}