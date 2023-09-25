import Header from "../../../components/Header/Header";
import { NoteDetails } from "../../../components/Notes/NoteDetails/NoteDetails";
import { PagesWrapper } from "../../../components/Wrappers/PagesWrapper/PagesWrapper";
import { useParams } from "react-router-dom";

export const Note = () => {
  const { id } = useParams();

  return (
    <>
      <Header />
      <PagesWrapper>
        <NoteDetails noteId={id} />
      </PagesWrapper>
    </>
  );
};
