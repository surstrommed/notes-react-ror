import { AfterDeleteFunction, TManageFormType } from "./common";

export type TCategory = {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
};

export type TCategoryCard = {
  category: TCategory;
  afterDelete: AfterDeleteFunction;
};

export type TCategoryManageForm = {
  type: TManageFormType;
  categoryId?: string;
};

export type TCategoryManageData = {
  name: string;
};
