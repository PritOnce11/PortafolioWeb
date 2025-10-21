import { Box, Button, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const HEADER_HEIGHT = 70;

const HeaderContainer = styled(Box)<{visible: boolean}>`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: ${HEADER_HEIGHT}px;
  background-color: #0f172a;
  position: fixed;
  top: 0;
  left: 0;
  transform: translateY(${({ visible }) => (visible ? "0" : "-100%")});
  transition: transform 0.3s;
  z-index: 1000;
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

export const Header = ({ visible = true }: { visible?: boolean }) => {

  const navigate = useNavigate();

  return (
    <HeaderContainer visible={visible}>
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
