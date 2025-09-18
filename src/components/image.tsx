import { motion } from "motion/react";

const FloatingImage = ({
  src,
  alt,
  position,
  animation,
  duration,
  rotation,
  size,
}: {
  src: string;
  alt: string;
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  animation?: "float" | "pulse" | "rotate" | "wave" | "bounce";
  duration: number;
  rotation: number;
  size: number;
}) => {
  const getAnimation = () => {
    switch (animation) {
      case "float":
        return {
          y: [0, -15, 0],
          transition: {
            duration,
            repeat: Infinity,
            ease: "easeInOut",
          },
        };
      case "pulse":
        return {
          scale: [1, 1.2, 1],
          transition: {
            duration,
            repeat: Infinity,
            ease: "easeInOut",
          },
        };
      case "rotate":
        return {
          rotate: [0, 360],
          y: [0, -10, 0],
          transition: {
            duration,
            repeat: Infinity,
            ease: "linear",
          },
        };
      case "wave":
        return {
          rotate: [-15, 15, -15],
          y: [0, -10, 0],
          transition: {
            duration,
            repeat: Infinity,
            ease: "backInOut",
          },
        };
      case "bounce":
        return {
          y: [0, -15, 0],
          transition: {
            duration,
            repeat: Infinity,
            ease: "easeOut",
          },
        };
      default:
        return {};
    }
  };

  const hoverAnimation = {
    scale: 1.3,
    ...(animation &&
      !["rotate", "wave"].includes(animation) && {
        rotate:
          rotation + (Math.random() * 8 + 5) * (Math.random() < 0.5 ? -1 : 1),
      }),
    transition: { duration: 0.3 },
  };

  const tapAnimation = {
    scale: 0.9,
    transition: { duration: 0.1 },
  };

  return (
    <motion.div
      style={{
        ...position,
        maxHeight: `${size}rem`,
        width: `${size}rem`,
        cursor: "pointer",
        position: "absolute",
        zIndex: "10",
        rotate: rotation,
      }}
      animate={getAnimation()}
      whileHover={hoverAnimation}
      whileTap={tapAnimation}
    >
      <img src={src} alt={alt} style={{ width: "100%", maxHeight: "100%" }} />
    </motion.div>
  );
};

export { FloatingImage };
