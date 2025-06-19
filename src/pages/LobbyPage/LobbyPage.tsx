import { Avatar, Button, Grow, Paper, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Container = styled("div")`
  display: flex;
  height: 100%;
  background-color: #f9f9f9;
  align-items: center;
`;

const ContentContainer = styled("div")`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 80px;
  flex-wrap: wrap;
  padding: 40px 20px;
`;

const TextContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 16px;
`;

const ImageContainer = styled("div")`
  width: 300px;
  height: 300px;
  background-color: #eee;
  border-radius: 200px;
  overflow: hidden;
  box-shadow: 10px 0 18px 10px rgba(0, 0, 0, 0.15); // Sombra solo al lado izquierdo
`;

const Title = styled("h1")`
  font-weight: 700;
  font-size: 3rem;
  color: #0f172a;
`;

const PaperStyled = styled(Paper)`
  max-width: 300px;
  background-color: #f9f9f9;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: background 0.3s, box-shadow 0.3s;
`;

const Text = styled("p")`
  font-weight: 400;
  font-size: 1.5rem;
  color: #0f172a;
  margin: 0;
`;

const StyledButton = styled(Button)`
  font-weight: 600;
  color: #f9f9f9;
  border: 1px solid #d4af37;
  background-color: #1c1c1e;
  transition: all 0.3s;

  &:hover {
    background-color:rgb(243, 243, 172);
    color: black;
  }
`;

export const LobbyPage = () => {

  const navigate = useNavigate();
  
  return (
    <Container>
      <Grow in={true} timeout={1000}>
        <ContentContainer>
          <TextContainer>
            <Title>Navpreet Once</Title>
            <Text>Desarrollador FullStack</Text>
            <PaperStyled>
              ¡Hola! Soy Navpreet Once, desarrollador FullStack con experiencia
              en React, Node y .NET. Me apasiona crear soluciones eficientes y
              seguir creciendo profesionalmente asumiendo nuevos retos. Aquí
              podrás conocer mi trabajo, intereses y trayectoria.
            </PaperStyled>
            <StyledButton onClick={() => navigate("/projects")}>
              Ver Proyectos
            </StyledButton>
            <StyledButton>
              Descargar CV
            </StyledButton>
          </TextContainer>
          <ImageContainer>
            <Avatar
              alt="Navpreet Once"
              src="/avatar.jpg"
              sx={{ width: 300, height: 300 }}
            />
          </ImageContainer>
        </ContentContainer>
      </Grow>
    </Container>
  );
};
