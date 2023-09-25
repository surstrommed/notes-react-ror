import { CSSProperties } from "react";

export const styles: { [style: string]: CSSProperties | undefined } = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  notesListContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "3rem",
    padding: "2rem 0",
  },
};
