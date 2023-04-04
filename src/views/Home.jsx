import { Container } from "react-bootstrap";

export default () => {
  return (
    <Container className="text-center">
      <h1 className="pt-5">
        Biendenido a <span className="fw-bold">Happy Cake</span> 
      </h1>
      <h6> El Lugar de los pasteles felices </h6><br />
        <div style={{scale:"5.5"}} className="mt-3">🍰</div>
    </Container>
  );
};
