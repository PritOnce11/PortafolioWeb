import { Box, styled } from "@mui/material";

export const FOOTER_HEIGHT = 70;

const FooterContainer = styled(Box)<{visible: boolean}>`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: ${FOOTER_HEIGHT}px;
  background-color: #0f172a;
  color: #f0f2f5;
  position: fixed;
  bottom: 0;
  left: 0;
  transform: translateY(${({ visible }) => (visible ? "0" : "100%")});
  transition: transform 0.3s;
  z-index: 1000;
`;

export const Footer = ({ visible = true }: { visible?: boolean }) => {
  return (
    <FooterContainer visible={visible}>
      <h1>FOOTER</h1>
    </FooterContainer>
  );
};

export default Footer;
