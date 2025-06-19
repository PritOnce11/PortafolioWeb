import { Grow, Paper, styled } from "@mui/material";
import { FloatingIcons } from "../../components/FloatingIcons";
import { useRef } from "react";

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
  gap: 40px;
  padding: 40px 20px;
  position: relative;
  overflow: hidden;
`;

const PaperStyled = styled(Paper)`
  max-width: 700px;
  background-color: #f9f9f9;
  padding: 30px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: background 0.3s, box-shadow 0.3s;
  z-index: 10;
  position: relative;
`;

const Subtitle = styled("h2")`
  font-size: 2rem;
  font-weight: 600;
  color: #0f172a;
  margin: 0;
`;

const TechStack = styled("div")`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  z-index: 10;
`;

const TechCard = styled("div")`
  background: #e2e8f0;
  padding: 8px 16px;
  border-radius: 8px;
  font-weight: 500;
  color: #0f172a;
`;

export const AboutPage = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <Container>
      <Grow in={true} timeout={1000}>
        <ContentContainer ref={contentRef}>
          <FloatingIcons src="/react.png" size={50} containerRef={contentRef} />
          <FloatingIcons src="/nodejs.png" size={50} containerRef={contentRef} />
          <FloatingIcons src="/net.png" size={50} containerRef={contentRef} />
          <FloatingIcons src="/typescript.png" size={50} containerRef={contentRef} />

          <Subtitle>Sobre mí</Subtitle>

          <PaperStyled>
            ¡Hola! Mi nombre es Navpreet Estuardo Gojlia Once. Soy
            desarrollador FullStack con una formación sólida en desarrollo de
            aplicaciones multiplataforma, obtenida en el C.I.D.E. de Palma de
            Mallorca, donde cursé el Grado Superior en Desarrollo de
            Aplicaciones Multiplataforma. Durante mi formación y experiencia
            profesional he trabajado tanto en frontend como backend, con
            tecnologías como React, TypeScript, .NET con C#, Node.js y Sencha
            Ext JS. Actualmente me encuentro trabajando como Desarrollador
            FullStack Junior en PLEXUS TECH – SM2 Baleares S.A., donde he
            seguido creciendo profesionalmente desde mis prácticas hasta mi
            puesto actual. Soy una persona comprometida, con ganas constantes de
            aprender y mejorar. Me gusta formar parte de equipos donde el
            ambiente de trabajo sea colaborativo y retador. Actualmente resido
            en Palma de Mallorca, desde donde sigo formándome y trabajando en
            nuevos proyectos. Siéntete libre de explorar mi portfolio, y gracias
            por visitar mi sitio.
          </PaperStyled>

          <TechStack>
            <TechCard>React</TechCard>
            <TechCard>TypeScript</TechCard>
            <TechCard>.NET</TechCard>
            <TechCard>Node.js</TechCard>
            <TechCard>Sencha Ext JS</TechCard>
            <TechCard>Java</TechCard>
          </TechStack>
        </ContentContainer>
      </Grow>
    </Container>
  );
};

export default AboutPage;
