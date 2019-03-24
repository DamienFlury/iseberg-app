import styled from 'styled-components';

const AppBar = styled.div`
  display: block;
  background-color: ${props => props.theme.palette.primary};
  color: white;
  box-shadow: 0 0px 10px #6d6d6d;
`

export default AppBar;