import { Container } from "./globalStyles";
import { Header } from "./components/header";
import { BodyNews } from "./components/body";

function App() {
  return (
    <Container>
      <Header />
      <BodyNews />
    </Container>
  );
}

export default App;
