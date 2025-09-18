import React from "react";
import { motion } from "motion/react";

interface AnimatedImageProps {
  src: string;
  alt: string;
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  animationType?: "float" | "pulse" | "rotate" | "sway" | "bounce" | "none";
  delay?: number;
  rotation: number;
  size: number;
  duration?: number;
}

export const AnimatedImage: React.FC<AnimatedImageProps> = ({
  src,
  alt,
  position,
  animationType = "float",
  delay = 0,
  duration,
  rotation,
  size,
}) => {
  const getAnimation = () => {
    switch (animationType) {
      case "float":
        return {
          y: [0, -15, 0],
          transition: {
            duration: duration || 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay,
          },
        };
      case "pulse":
        return {
          scale: [1, 1.2, 1],
          transition: {
            duration: duration || 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay,
          },
        };
      case "rotate":
        return {
          rotate: [0, 360],
          y: [0, -10, 0],
          transition: {
            duration: duration || 8,
            repeat: Infinity,
            ease: "linear",
            delay,
          },
        };
      case "sway":
        return {
          rotate: [-15, 15, -15],
          y: [0, -10, 0],
          transition: {
            duration: duration || 8,
            repeat: Infinity,
            ease: "backInOut",
            delay,
          },
        };
      case "bounce":
        return {
          y: [0, -15, 0],
          transition: {
            duration: duration || 3,
            repeat: Infinity,
            ease: "easeOut",
            delay,
          },
        };
      default:
        return {};
    }
  };

  const hoverAnimation = {
    scale: 1.3,
    ...(!["rotate", "sway"].includes(animationType) && {
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

export default AnimatedImage;
