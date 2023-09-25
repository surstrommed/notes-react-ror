import { CSSProperties } from "react";

export const styles: { [style: string]: CSSProperties | undefined } = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  topContainer: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  },
  underlined: { textDecoration: "underline" },
};
