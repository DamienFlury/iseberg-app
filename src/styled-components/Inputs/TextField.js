import styled from 'styled-components';

const TextField = styled.input`
    padding: 10px;
    outline: none;
    border: none;
    border-bottom: 2px solid #aaaaaa;
    transition: 0.4s;

    &:focus {
        border-bottom: 2px solid ${props => props.theme.palette.primary}
    }
`;

export default TextField;