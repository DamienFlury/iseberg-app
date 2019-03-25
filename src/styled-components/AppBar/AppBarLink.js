import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import { withTheme } from 'styled-components';

const StyledLink = styled(NavLink)`
    display: inline-block;
    color: white;
    text-decoration: none;
    font-size: 20px;
    padding: 25px;
    transition: 0.2s;

    &:hover {
        background-color: ${props => props.theme.palette.primaryDark}
    }
`

const AppBarLink = withTheme(({children, to, theme}) => <StyledLink to={to} activeStyle={{backgroundColor: theme.palette.primaryDark}}>{children}</StyledLink>);

export default AppBarLink;