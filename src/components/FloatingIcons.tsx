import { useEffect, useRef, useState } from "react";

type FloatingDVDIconProps = {
  src: string;
  size?: number;
  containerRef: React.RefObject<HTMLElement | null>;
};

export const FloatingIcons = ({ src, size = 40, containerRef }: FloatingDVDIconProps) => {
  const iconRef = useRef<HTMLImageElement>(null);

  const [pos, setPos] = useState({
    x: Math.random() * 200,
    y: Math.random() * 100,
  });

  const [vel, setVel] = useState({
    dx: 1 + Math.random() * 1.5,
    dy: 1 + Math.random() * 1.5,
  });

  useEffect(() => {
    const animate = () => {
      const el = iconRef.current;
      const parent = containerRef.current;
      if (!el || !parent) return;

      const parentRect = parent.getBoundingClientRect();

      let newX = pos.x + vel.dx;
      let newY = pos.y + vel.dy;

      if (newX + size > parentRect.width || newX < 0) {
        setVel((v) => ({ ...v, dx: -v.dx }));
        newX = Math.max(0, Math.min(newX, parentRect.width - size));
      }

      if (newY + size > parentRect.height || newY < 0) {
        setVel((v) => ({ ...v, dy: -v.dy }));
        newY = Math.max(0, Math.min(newY, parentRect.height - size));
      }

      setPos({ x: newX, y: newY });
    };

    const interval = setInterval(animate, 10);
    return () => clearInterval(interval);
  }, [pos, vel, size, containerRef]);

  return (
    <img
      ref={iconRef}
      src={src}
      alt="floating-icon"
      style={{
        position: "absolute",
        left: pos.x,
        top: pos.y,
        width: `${size}px`,
        opacity: 0.3,
        zIndex: 1,
        pointerEvents: "none",
        transition: "transform 0.1s linear",
      }}
    />
  );
};
