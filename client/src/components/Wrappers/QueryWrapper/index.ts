import { CSSProperties } from "react";

export const styles: { [style: string]: CSSProperties | undefined } = {
  banner: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10%",
  },
  buttonsWrapper: {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    marginTop: "1rem",
  },
};
