import { styled } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import "./App.css";
import Footer, { FOOTER_HEIGHT } from "./components/Footer";
import { Header, HEADER_HEIGHT } from "./components/Header";
import { Router } from "./components/Router";

const Container = styled("div")`
  height: 100vh;
  overflow-y: auto;
  margin: 0;
  padding-top: ${HEADER_HEIGHT}px;
  padding-bottom: ${FOOTER_HEIGHT}px;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
`;

function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showHeader, setShowHeader] = useState(true);
  const [showFooter, setShowFooter] = useState(true);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleScroll = () => {
      const atTop = el.scrollTop <= 0;
      const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight;
      const noScroll = el.scrollHeight <= el.clientHeight;

      if (noScroll) {
        setShowHeader(true);
        setShowFooter(true);
      } else {
        setShowHeader(atTop);
        setShowFooter(atBottom);
      }
    };

    el.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container ref={containerRef}>
      <Header visible={showHeader} />
      <div style={{ flex: 1, width: "100%" }}>
        <Router />
      </div>
      <Footer visible={showFooter} />
    </Container>
  );
}


export default App;
