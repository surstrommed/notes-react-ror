import { Typography } from "antd";
import { TNoteDetails } from "../../../models/notes";
import { useQuery } from "@tanstack/react-query";
import { getCategoryById, getNoteById } from "../../../utils";
import { QueryWrapper } from "../../Wrappers/QueryWrapper/QueryWrapper";
import { TQueryError } from "../../../models/common";
import { ManageButton } from "../../Buttons/ManageButton/ManageNoteButton";
import { styles } from ".";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../consts";

export const NoteDetails = ({ noteId }: TNoteDetails) => {
  const navigate = useNavigate();

  const {
    isLoading: noteLoading,
    error,
    data: note,
  } = useQuery({
    queryKey: [`note_${noteId}`],
    queryFn: () => getNoteById(noteId),
  });

  const { isLoading: categoryLoading, data: categoryData } = useQuery({
    queryKey: [note],
    queryFn: () => getCategoryById(note?.category_id),
  });

  const title = note?.title;
  const content = note?.content;

  const afterDelete = () => {
    navigate(ROUTES.notes);
  };

  return (
    <QueryWrapper
      isLoading={noteLoading || categoryLoading}
      error={error as TQueryError}
      data={note}
    >
      <div style={styles.container}>
        <div style={styles.topContainer}>
          <Typography.Title level={1}>{title}</Typography.Title>
          {note && noteId && (
            <ManageButton
              type="note"
              id={Number(noteId)}
              afterDelete={afterDelete}
            />
          )}
        </div>
        {categoryData?.category?.name && (
          <div>
            <Typography.Title level={3}>
              <span style={styles.underlined}>Category:</span>{" "}
              {categoryData.category.name}
            </Typography.Title>
          </div>
        )}
        <div>
          <Typography.Title level={5}>
            <span style={styles.underlined}>Content:</span> {content}
          </Typography.Title>
        </div>
      </div>
    </QueryWrapper>
  );
};
