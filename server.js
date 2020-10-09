const express = require("express");
const path = require("path");

const cors = require('cors');
const mailer = require('nodemailer');
const mailerConfig = require('./backend/services/mailerConfig');

const app = express();
app.use(cors());
app.use(express.json());

const transporter = mailer.createTransport(mailerConfig);

app.post('/sendMail', (request, response) => {
    const {
        userName,
        userEmail,
        userWhatsApp,
        userSubject,
        userMessage
    } = request.body;



    const message = {
        from: userEmail,
        to: 'marcos@tmcieletrica.com.br',
        subject: '[CONTATO WEBSITE] NOVA SOLICITAÇÃO',
        text: `
            Nome: ${userName} 
            Email: ${userEmail}
            WhatsApp: ${userWhatsApp} 
            Assunto: ${userSubject}
            Mensagem: ${userMessage}`

    };

    transporter.sendMail(message, error => {
        if(error) {
            return response.status(400).send('Deu ruim!' + error);
        } else return response.status(200).send('Foi!');
    });

});

const configs = {
    caminho: "build", //Aqui será definido a pasta de saída onde contém o index.html e os outros arquivos.
    forcarHTTPS: false, //Defina para true se desejar que o redirecionamento para HTTPS seja forçado (é necessário certificado SSL ativo)
    port: process.env.PORT || 3000
}

if (configs.forcarHTTPS) //Se o redirecionamento HTTP estiver habilitado, registra o middleware abaixo
    app.use((req, res, next) => { //Cria um middleware onde todas as requests passam por ele
        if (req.headers["x-forwarded-proto"] == "http") //Checa se o protocolo informado nos headers é HTTP
            res.redirect(`https://${req.headers.host}${req.url}`); //Redireciona pra HTTPS
        else //Se a requisição já é HTTPS
            next(); //Não precisa redirecionar, passa para os próximos middlewares que servirão com o conteúdo desejado
    });

app.use(express.static(configs.caminho)); //Serve os outros arquivos, como CSSs, Javascripts, Imagens etc.

app.get("*", (req, res) => {// O wildcard '*' serve para servir o mesmo index.html independente do caminho especificado pelo navegador.
    res.sendFile(path.join(__dirname, configs.caminho, "index.html"));
});

app.listen(configs.port, () => {
    console.log(`Escutando na ${configs.port}!`);
});

