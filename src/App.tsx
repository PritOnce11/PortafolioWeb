import { styled } from "@mui/material";
import "./App.css";
import Footer from "./components/Footer";
import { Header } from "./components/Header";
import { Router } from "./components/Router";

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  background-color: #f9f9f9;
`;

function App() {
  return (
    <Container>
      <Header />
      <div style={{ flex: 1, width: '100%' }}>
        <Router />
      </div>
      <Footer />
    </Container>
  );
}


export default App;
