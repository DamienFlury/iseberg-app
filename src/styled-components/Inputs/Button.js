import styled from 'styled-components';

const Button = styled.button`
    text-transform: uppercase;
    background-color: ${props => props.theme.palette.primary};
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    outline: none;
    box-shadow: 0 2px 2px #888888;
    transition: 0.2s;

    &:active {
        box-shadow: 0 5px 5px #888888;
    }
`;

export default Button;