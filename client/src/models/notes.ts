import { AfterDeleteFunction, TManageFormType } from "./common";

export type TNote = {
  id: number;
  title: string;
  content: string;
  category_id: number;
  created_at: string;
  updated_at: string;
};

export type TNoteCard = { note: TNote; afterDelete: AfterDeleteFunction };

export type TNoteManageForm = {
  type: TManageFormType;
  noteId?: string;
};

export type TNoteManageData = {
  title: string;
  content: string;
  category_id: string;
};

export type TNoteDetails = {
  noteId?: string;
};
