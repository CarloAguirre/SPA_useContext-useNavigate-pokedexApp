import { Navbar, Container } from "react-bootstrap";
import {  NavLink } from "react-router-dom";
import "../styles.css"

export default function Navigation() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container className="space-between">
          <div>
            <a href="/"><img src="logo.png" alt="logo" /></a>  
          </div>
          <div>
            <NavLink className={({isActive})=>(isActive ? "active" : "navLink")} to="/">Home</NavLink>
            <NavLink className={({isActive})=>(isActive ? "active" : "navLink")} to="/pokemon">Pokemons</NavLink>      
          </div>
        </Container>
      </Navbar>
    </>
  );
}
