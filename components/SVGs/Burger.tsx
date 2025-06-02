import * as motion from "motion/react-client";

export default function Burger() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 52 14"
      width="52"
      height="14"
    >
      <motion.path
        variants={{
          light: { fill: "#f8f8f8" },
          dark: { fill: "#0b0b0b" },
        }}
        d="M0 0h52v4H0z"
      />
      <motion.path
        variants={{
          light: { fill: "#f8f8f8" },
          dark: { fill: "#0B0B0B" },
        }}
        d="M0 10h52v4H0z"
      />
    </svg>
  );
}
