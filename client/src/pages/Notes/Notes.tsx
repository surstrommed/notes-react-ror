import Header from "../../components/Header/Header";
import { NotesList } from "../../components/Notes/NotesList/NotesList";
import { PagesWrapper } from "../../components/Wrappers/PagesWrapper/PagesWrapper";

export const Notes = () => {
  return (
    <>
      <Header />
      <PagesWrapper>
        <NotesList />
      </PagesWrapper>
    </>
  );
};
