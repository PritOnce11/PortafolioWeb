import { Grow, styled } from "@mui/material";
import { ContactForm } from "../../components/EmailForm";

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #f9f9f9;
`;

const ContentContainer = styled("div")`
  flex: 1;
  min-height: 680px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

const Subtitle = styled("h2")`
  font-size: 2rem;
  font-weight: 600;
  color: #0f172a;
  margin: 0;
`;

export const ContactPage = () => {
  return (
    <Container>
      <Grow in={true} timeout={1000}>
        <ContentContainer>
          <Subtitle>Conecta conmigo</Subtitle>
          <ContactForm />
        </ContentContainer>
      </Grow>
    </Container>
  )
}

export default ContactPage
