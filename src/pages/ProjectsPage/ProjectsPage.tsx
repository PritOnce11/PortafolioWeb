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
  flex: 1;
  min-height: 680px;
  display: flex;
  flex-direction: row;
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
            <CustomCard
              key={repo.id}
              title={repo.name}
              description={repo.description}
            />
          ))}
        </ReposContainer>
      </ContentContainer>
    </Container>
  )
}
