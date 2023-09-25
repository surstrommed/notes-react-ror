import { CSSProperties } from "react";

export const styles: {
  [style: string]: CSSProperties | undefined;
} = {
  container: { display: "flex", flexDirection: "column", alignItems: "center" },
  form: { minWidth: 300, marginTop: "2rem" },
  contentTextarea: { resize: "none" },
  manageNoteBtn: { width: "100%", marginTop: "2rem" },
};
