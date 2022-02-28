import { Link } from 'react-router-dom';
import Logo from './images/kowalskilogo.png';
import Styled from 'styled-components';

function Homepage() {


    return(
        <div className="homepage">

            <img src={Logo} alt="Kowalski Graphics Logo"/>
            
            <StyledLink to="/about">About Me</StyledLink>
            
        </div>
    )
}

export default Homepage;

const StyledLink = Styled(Link) `
    margin-top: 2vh;
    font-size: 2.5rem;
`