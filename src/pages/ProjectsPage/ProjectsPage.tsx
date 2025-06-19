import { styled } from "@mui/material";
import { useEffect, useState } from "react";
import CustomCard from "../../components/Card";

type Repo = {
  updated_at: string | number | Date;
  id: number;
  name: string;
  description: string;
  html_url: string;
};

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

const ReposContainer = styled("div")`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 32px;
  width: 100%;
  max-width: 1200px;
  padding: 32px 0;
  box-sizing: border-box;
`;


const Subtitle = styled("h2")`
  font-size: 2rem;
  font-weight: 600;
  color: #0f172a;
  margin: 0;
`;

const CardWrapper = styled("div")`
  width: 100%;
  height: 280px; // o el alto que desees
  display: flex;
`;


export const ProjectsPage = () => {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    fetch(import.meta.env.VITE_GITHUB_ENDPOINT)
      .then((res) => res.json())
      .then((data) => {
        // Opcional: ordenar por fecha de actualización
        const sorted = data.sort((a: Repo, b: Repo) =>
          new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
        );
        setRepos(sorted);
      });
  }, []);

  return (
    <Container>
      <ContentContainer>
        <Subtitle>Proyectos</Subtitle>
        <ReposContainer>
          {repos.map((repo) => (
            <CardWrapper key={repo.id}>
              <CustomCard
                title={repo.name}
              />
            </CardWrapper>
          ))}
        </ReposContainer>
      </ContentContainer>
    </Container>
  );
};
