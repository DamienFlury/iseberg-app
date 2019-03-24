import styled from 'styled-components';

const Typography = styled.span`
    font-family: ${props => props.theme.typography && props.theme.typography.fontFamily};
    font-size: ${props => getFontSize(props.variant)}
`


const getFontSize = fontSizeType => {
    switch(fontSizeType) {
        case 'h1': return '2rem';
        case 'body1': return '1rem';
        default: return '1rem';
    }
}

export default Typography;