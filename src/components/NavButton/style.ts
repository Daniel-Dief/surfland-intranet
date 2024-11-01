import style from 'styled-components';

export const Button = style.button`
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    background-color: transparent;
    transition: 0.3s;
    gap: 0.5rem;
    font-size: 1.25rem;

    &:hover {
        background-color: rgba(0, 0, 0, 0.1);
    }
`;