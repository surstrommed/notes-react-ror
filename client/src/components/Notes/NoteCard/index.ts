import { CSSProperties } from "react";

export const styles: { [style: string]: CSSProperties | undefined } = {
  card: {
    width: 300,
    border: "1px solid lightGrey",
  },
  topContainer: { display: "flex", justifyContent: "space-between" },
};
