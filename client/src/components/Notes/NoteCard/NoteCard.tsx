import { Card } from "antd";
import { TNoteCard } from "../../../models/notes";
import { Link } from "react-router-dom";
import { styles } from ".";
import { getNoteLink, handleNoteCardContent } from "../../../utils/note";
import { ManageButton } from "../../Buttons/ManageButton/ManageNoteButton";

export const NoteCard = ({ note, afterDelete }: TNoteCard) => {
  const { id, title, content } = note;

  return (
    <Card
      title={
        <div style={styles.topContainer}>
          <Link to={getNoteLink(id)}>{title}</Link>
          <ManageButton type="note" id={id} afterDelete={afterDelete} />
        </div>
      }
      bordered={false}
      style={styles.card}
    >
      <div>{handleNoteCardContent(content)}</div>
    </Card>
  );
};
