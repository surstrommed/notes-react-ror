import { Card, Typography } from "antd";
import { styles } from ".";
import { ManageButton } from "../../Buttons/ManageButton/ManageNoteButton";
import { TCategoryCard } from "../../../models/categories";
import { useQuery } from "@tanstack/react-query";
import { getCategoryById } from "../../../utils";

export const CategoryCard = ({ category, afterDelete }: TCategoryCard) => {
  const { id, name } = category;

  const { data: categoryData } = useQuery({
    queryKey: [id],
    queryFn: () => getCategoryById(id),
  });

  return (
    <Card
      title={
        <div style={styles.topContainer}>
          <Typography.Link>{name}</Typography.Link>
          <ManageButton type="category" id={id} afterDelete={afterDelete} />
        </div>
      }
      bordered={false}
      style={styles.card}
    >
      {typeof categoryData?.notes_count === "number" && (
        <Typography.Paragraph>
          {categoryData.notes_count > 0 ? (
            <>
              This category has <b>{categoryData.notes_count}</b>{" "}
              {categoryData.notes_count > 1 ? "notes" : "note"}.
            </>
          ) : (
            <>This category has no notes.</>
          )}
        </Typography.Paragraph>
      )}
    </Card>
  );
};
