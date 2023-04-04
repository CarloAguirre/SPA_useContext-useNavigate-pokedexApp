import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <Navbar bg="danger" variant="danger">
        <Container className="space-between">
          <div>
            <Link to="/" className="text-white ms-3 text-decoration-none">🏠Home</Link>
            <Link to="/contacto" className="text-white ms-3 text-decoration-none">📒Contacto</Link>        
          </div>
          <div>
            <h5 className="text-white">Happy Cake<span> 🍰</span></h5>
          </div>
        </Container>
      </Navbar>
    </>
  );
}
