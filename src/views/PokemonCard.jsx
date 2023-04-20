import { Container } from "react-bootstrap";

import { SelectedPokemon } from "../components/SelectedPokemon";
import { useParams } from "react-router-dom";

export default () => {

  const {name} = useParams()

  return (
    <Container className="pt-5">
      <SelectedPokemon name={name}/>
    </Container>
  );
};
