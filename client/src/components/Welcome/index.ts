import { CSSProperties } from "react";

export const styles: { [style: string]: CSSProperties | undefined } = {
  container: {
    display: "flex",
    justifyContent: "center",
    marginTop: "10%",
    width: "100%",
    flexWrap: "wrap",
  },
  projectName: {
    color: "blue",
  },
  buttons: {
    display: "flex",
    flex: "1 1 100%",
    justifyContent: "center",
    gap: "1rem",
  },
};
