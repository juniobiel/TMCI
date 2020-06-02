import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flexbox;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div`
    background: #ADBABD;
    margin: auto;
    width: 1024px;
    min-height: 380px;
    display: flex;
    justify-content: space-between;
    border: 0;
    box-shadow: 5px 1px 25px #ADBABD;

    section {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0 20px 0px 25px;
    }

    #logo-image {
        width: 100%;
        height: 120px;
        display: flex;
        justify-content: center;
        
        img {
            height: inherit;
        }
    }
    
    
    p {
        font: 400 18px Noto Sans JP, sans-serif;
        text-align: center;
    }

    p + p {
        font: 100 18px Noto Sans JP, sans-serif;
        text-align: center;
    }   

    button {
        float:right;
        width: 120px;
        height: 35px;
        border: 0;
        margin-top: 15px;
        font-family: Noto Sans JP, sans-serif;
        transition: 0.2s;
    }

    button:hover {
        background: #E8C547;
        font-size: 15px;
        font-weight: bold;
    }
`;

export const Form = styled.form`
    width: 100%;
    padding: 20px;
    display: flexbox;
    align-items: center;
    justify-content: center;

    input {
        width: 100%;
        height: 40px;
        margin-bottom: 10px;
        padding-left: 5px;
        
    }
    
    textarea {
        width: 100%;
        min-height: 80px;
        margin-top: 25px;
        resize: vertical;
        padding-left: 5px;
    }
`;