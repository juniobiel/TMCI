import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flexbox;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div`
    margin: auto;
    width: 900px;
    height: 380px;
    display: flex;
    justify-content: space-between;
    border: 1px solid black;

    section {
        display: flexbox;
        align-items: center;
        padding: 0 20px;
        

    }
`;