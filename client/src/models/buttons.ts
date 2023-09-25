import { AfterDeleteFunction } from "./common";

export type TManageButton = {
  type: "note" | "category";
  id: number;
  afterDelete?: AfterDeleteFunction;
};
