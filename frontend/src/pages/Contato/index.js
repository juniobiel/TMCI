import React from 'react';
//import {Container} from './styles';
import {Container, TextField, Button, TextareaAutosize} from '@material-ui/core';


export default function Contato() {
    return(
        <Container maxWidth="lg">
            <form className='Form' noValidate autoComplete="off">
                <TextField id="standard-full-width" fullWidth label="Nome" required />
                <TextField id="standard-full-width" fullWidth label="E-mail" type="email" required />
                <TextField id="standard-full-width" fullWidth label="Assunto" required />
                <TextField id="standard-full-width" fullWidth label="WhatsApp" required />
                <TextField id="standard-full-width" fullWidth label="Mensagem" required />
            </form>
            <Button id="button-default" variant="contained" color="default" >Enviar</Button>
        </Container>
        
    );
}