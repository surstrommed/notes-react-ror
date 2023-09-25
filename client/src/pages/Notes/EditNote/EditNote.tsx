import Header from "../../../components/Header/Header";
import { PagesWrapper } from "../../../components/Wrappers/PagesWrapper/PagesWrapper";
import { useParams } from "react-router-dom";
import { NoteManageForm } from "../../../components/Notes/NoteManageForm/NoteManageForm";

export const EditNote = () => {
  const { id } = useParams();

  return (
    <>
      <Header />
      <PagesWrapper>
        <NoteManageForm type="edit" noteId={id} />
      </PagesWrapper>
    </>
  );
};
