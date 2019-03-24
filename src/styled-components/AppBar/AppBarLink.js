import styled from 'styled-components';
import {Link} from 'react-router-dom';

const AppBarLink = styled(Link)`
    display: inline-block;
    color: white;
    text-decoration: none;
    font-size: 20px;
    padding: 30px;
    transition: 0.2s;

    &:hover {
        background-color: ${props => props.theme.palette.primaryDark}
    }
`

export default AppBarLink;