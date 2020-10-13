import React, {useState} from 'react';
import api from '../../services/api';
import { ToastContainer ,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from '../../components/Header';

import './styles.css';

function Contact(){
    const [name, setName] = useState();
    const [whatsappNumber, setWhatsappNumber] = useState();
    const [email, setEmail] = useState();
    const [subject, setSubject] = useState();
    const [message, setMessage] = useState();

    async function handleSubmit(e) {
        e.preventDefault();
        document.getElementById("btn-submit").disabled = true;

        const data = {
            userName: name,
            userEmail: email,
            userWhatsApp: whatsappNumber,
            userSubject: subject,
            userMessage: message
        };

        try {
            await api.post('/sendMail', data);

            toast.success('Mensagem enviada com sucesso!', {
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
        <div className="contact-container">
            <Header title="Contato" nav1="Sobre a TMCI" nav2="Nossos Serviços" />

            <section className="form">
                <form onSubmit={handleSubmit} autoComplete="off">

                    <div className="form-input">
                        <label>Nome</label>
                        <input 
                            placeholder="Digite seu nome"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            required 
                        />
                    </div>

                    <div className="form-input">
                        <label>WhatsApp</label>
                        <input 
                            placeholder="Digite seu WhatsApp p. ex: (19) 99190-9091" 
                            value={whatsappNumber}
                            onChange={e => setWhatsappNumber(e.target.value)}
                            required 
                        />
                    </div>

                    <div className="form-input">
                        <label>E-mail</label>
                        <input 
                            type="email" 
                            placeholder="Digite seu e-mail" 
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required 
                        />
                    </div>

                    <div className="form-input">
                        <label>Assunto</label>
                        <input 
                            placeholder="Qual é o assunto?" 
                            value={subject}
                            onChange={e => setSubject(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-input">
                        <label>Mensagem</label>
                        <textarea 
                            name="message" id="message" 
                            placeholder="Descreva sua mensagem aqui" 
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                            required 
                        ></textarea>
                    </div>

                    <div className="form-button">
                        <button className="button" id="btn-submit" type="submit">Enviar</button>
                        <button className="button" type="reset">Limpar</button> 
                    </div>
                    
                    <ToastContainer />

                </form>
            </section>
        </div>
    )
}

export default Contact;