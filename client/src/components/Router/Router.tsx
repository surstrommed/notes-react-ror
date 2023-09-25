import { Route, Routes } from "react-router-dom";
import { ROUTES } from "../../consts";
import { Home } from "../../pages/Home/Home";
import { NotFound } from "../../pages/NotFound/NotFound";
import { Notes } from "../../pages/Notes/Notes";
import { CreateNote } from "../../pages/Notes/CreateNote/CreateNote";
import { Categories } from "../../pages/Categories/Categories";
import { CreateCategory } from "../../pages/Categories/CreateCategory/CreateCategory";
import { EditCategory } from "../../pages/Categories/EditCategory/EditCategory";
import { EditNote } from "../../pages/Notes/EditNote/EditNote";
import { Note } from "../../pages/Notes/Note/Note";

export const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.main} element={<Home />} />
      <Route path={ROUTES.notes} element={<Notes />} />
      <Route path={ROUTES.noteCreate} element={<CreateNote />} />
      <Route path={`${ROUTES.noteEdit}/:id`} element={<EditNote />} />
      <Route path={`${ROUTES.notes}/:id`} element={<Note />} />
      <Route path={ROUTES.categories} element={<Categories />} />
      <Route path={ROUTES.categoryCreate} element={<CreateCategory />} />
      <Route path={`${ROUTES.categoryEdit}/:id`} element={<EditCategory />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};
