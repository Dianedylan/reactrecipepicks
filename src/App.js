import Pages from "./pages/Pages";
import Category from "./components/category";
import Search from "./components/search";
import Home from "./pages/Home";
import './App.css';
import styled from "styled-components";
import {Link, BrowserRouter} from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";
import Decoimg from "./footimg.avif";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header className="App-header">
          <div className="flex">
            <div className="circs">
              <img src={Decoimg} alt="decopic"/>
            
                <Nav>
                  <GiForkKnifeSpoon/>
                  <Logo to={"/"}>Recipicks</Logo>
                </Nav>
            </div> 
              <div className="cuisine">
                  <Search/>
                  <div className="padtop"><Category/></div>
              </div>
          </div>
        </Header>
        <Pages/>
      </BrowserRouter>

    <footer className='foot-img'>
      <img src={Decoimg} className="footerimg" alt="footerpic" />
      </footer>

    </div>
  );
}

const Logo = styled(Link)`
text-decoration: none;
font-size: 1.5rem;
font-weight: 400;
font-family: "Montserrat";
`;
const Nav = styled(Link)`
display: flex;
justify-content: flex-start;
align-items: center;

svg{
  font-size: 2rem;
}
`;
const Header = styled.div`
margin: 0px;

img{
  height: 20rem;
  width: 20rem;

}
`;

export default App;
