import { Box, styled } from "@mui/material";

const FooterContainer = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 70px;
  background-color: #0f172a;
  color: #f0f2f5;
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <h1>FOOTER</h1>
    </FooterContainer>
  );
};

export default Footer;
