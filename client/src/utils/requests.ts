import {
  DEFAULT_QUERY_CATEGORIES,
  DEFAULT_QUERY_NOTES,
  ITEMS_PER_PAGE,
  ROUTES,
} from "../consts";
import { TCategory, TCategoryManageData } from "../models/categories";
import { TNote, TNoteManageData } from "../models/notes";
import { http } from "./api";

export const getAllNotes = async (page: number) => {
  try {
    const result = await http.get<{
      notes: TNote[];
      total: number;
      currentPage: number;
    }>(ROUTES.getNotes(page, ITEMS_PER_PAGE));

    return result;
  } catch {
    return DEFAULT_QUERY_NOTES(page);
  }
};

export const deleteNote = async (noteId: number) => {
  return await http.delete(`${ROUTES.notes}/${noteId}`);
};

export const createNote = async (note: TNoteManageData) => {
  return await http.post<TNote, { note: TNoteManageData }>(ROUTES.notes, {
    note,
  });
};

export const editNote = async (note: TNoteManageData, noteId: number) => {
  return await http.patch<TNote, { note: TNoteManageData }>(
    `${ROUTES.notes}/${noteId}`,
    { note }
  );
};

export const getNoteById = async (noteId: string | undefined) => {
  try {
    if (!noteId) return null;

    return await http.get<TNote>(`${ROUTES.notes}/${noteId}`);
  } catch {
    return null;
  }
};

export const getAllCategories = async (page?: number) => {
  try {
    const result = await http.get<{
      categories: TCategory[];
      total: number;
      currentPage: number;
    }>(
      page
        ? ROUTES.getCategories(page, ITEMS_PER_PAGE)
        : ROUTES.getAllCategories
    );

    return result;
  } catch {
    return DEFAULT_QUERY_CATEGORIES(page);
  }
};

export const deleteCategory = async (categoryId: number) => {
  return await http.delete(`${ROUTES.categories}/${categoryId}`);
};

export const createCategory = async (category: TCategoryManageData) => {
  return await http.post<TCategory, { category: TCategoryManageData }>(
    ROUTES.categories,
    { category }
  );
};

export const editCategory = async (
  category: TCategoryManageData,
  categoryId: number
) => {
  return await http.patch<TCategory, { category: TCategoryManageData }>(
    `${ROUTES.categories}/${categoryId}`,
    { category }
  );
};

export const getCategoryById = async (categoryId: number | undefined) => {
  try {
    if (!categoryId) return null;

    return await http.get<{
      category: TCategory;
      notes_count: number;
    }>(`${ROUTES.categories}/${categoryId}`);
  } catch {
    return null;
  }
};
