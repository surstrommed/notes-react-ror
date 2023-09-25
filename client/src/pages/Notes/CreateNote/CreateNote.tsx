import Header from "../../../components/Header/Header";
import { NoteManageForm } from "../../../components/Notes/NoteManageForm/NoteManageForm";
import { PagesWrapper } from "../../../components/Wrappers/PagesWrapper/PagesWrapper";

export const CreateNote = () => {
  return (
    <>
      <Header />
      <PagesWrapper>
        <NoteManageForm type="create" />
      </PagesWrapper>
    </>
  );
};
