const CLIENT_ROUTES = {
  main: "/",
  notes: "/notes",
  categories: "/categories",
  noteEdit: "/notes/edit",
  noteCreate: "/notes/create",
  categoryEdit: "/categories/edit",
  categoryCreate: "/categories/create",
};

const API_ROUTES = {
  getNotes: (page: number, limit: number) =>
    `/notes?page=${page}&limit=${limit}`,
  getAllCategories: "/categories",
  getCategories: (page: number, limit: number) =>
    `/categories?page=${page}&limit=${limit}`,
};

export const ROUTES = {
  ...CLIENT_ROUTES,
  ...API_ROUTES,
};
