import * as motion from "motion/react-client";
export default function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 126 22"
      width="126"
      height="22"
      className="h-auto w-full"
    >
      <motion.path
        d="M126 14.14V7.86h-8.397V6.28H126V0h-15.128v7.86h-1.689V0h-6.708v7.86h-1.689L95.744 0h-6.709v7.86h-1.688V0h-6.709v7.86h-8.397V0H65.51v7.86H45.362V6.28h8.42V0H38.653v7.86h-1.711V0h-6.708v7.86H25.19V0h-6.709v7.86h-6.73V6.28h5.042V0H0v6.28h5.043v1.58H0v6.28h5.043V22h6.708v-7.86h6.731V22h6.709v-7.86h5.043V22h6.708v-7.86h1.711V22h15.129v-6.28h-8.42v-1.58H65.51V22h13.44v-6.28h-6.71v-1.58h8.397V22h6.709v-7.86h1.688V22h6.709v-7.86h1.688l5.043 7.86h6.708v-7.86h1.689V22H126v-6.28h-8.397v-1.58z"
        variants={{
          light: { fill: "#f8f8f8" },
          dark: { fill: "#0b0b0b" },
        }}
      ></motion.path>
    </svg>
  );
}
