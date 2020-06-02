const express = require('express');
const cors = require('cors');
const mailer = require('nodemailer');
const mailerConfig = require('./src/services/mailerConfig');

const app = express();
app.use(cors());
app.use(express.json());

const transporter = mailer.createTransport(mailerConfig);

app.post('/sendMail', (request, response) => {
    const {
        userName,
        userEmail,
        userWhatsApp,
        userMessage
    } = request.body;



    const message = {
        from: 'contato@tmcieletrica.com.br',
        to: 'marcos@tmcieletrica.com.br',
        subject: '[CONTATO WEBSITE] NOVA SOLICITAÇÃO',
        text: `
            Nome: ${userName} 
            Email: ${userEmail}
            WhatsApp: ${userWhatsApp} 
            Mensagem: ${userMessage}`

    };

    transporter.sendMail(message, error => {
        if(error) {
            return response.status(400).send('Deu ruim!' + error);
        } else return response.status(200).send('Foi!');
    });

});

app.listen(3333);