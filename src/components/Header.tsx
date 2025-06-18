import { Box, Button, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";

const HeaderContainer = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  background-color: #0f172a;
`;

const StyledTitle = styled("h1")`
  margin-left: 20px;
  font-weight: 100;
  font-size: 20px;
  color: #ffffff;
`;

const ButtonsGroup = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 16px;
  margin-right: 20px;
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

export const Header = () => {

  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <StyledTitle>Navpreet Once</StyledTitle>
      <ButtonsGroup>
        <StyledButton onClick={() => navigate("/")}>Home</StyledButton>
        <StyledButton onClick={() => navigate("/about")}>About</StyledButton>
        <StyledButton onClick={() => navigate("/projects")}>Projects</StyledButton>
        <StyledButton onClick={() => navigate("/contact")}>Contact</StyledButton>
      </ButtonsGroup>
    </HeaderContainer>
  );
};
