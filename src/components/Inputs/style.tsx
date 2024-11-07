import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border-radius: 15px;
    background-color: rgba(0, 0, 0, 0.1);
    padding: 10px;
    width: 20rem;
`;

export const Input = styled.input`
    border: none;
    outline: none;
    width: 100%;
    height: 30px;
    padding: 0 10px;
    font-size: 1rem;
    font-weight: 500;
    color: #000;
    background-color: transparent;
`;

export const VisibleIcon = styled.img`
    width: 1.3rem;
    height: 1.3rem;
    cursor: pointer;
    padding: 5px;
    border-radius: 5px;
    transition: 0.3s ease-in-out;
    
    &:hover {
        border-radius: 10px;
        background-color: rgba(0, 0, 0, 0.1);
    }
`