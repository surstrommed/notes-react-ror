import { useQuery } from "@tanstack/react-query";
import { styles } from ".";
import { Pagination } from "../../Pagination/Pagination";
import { QueryWrapper } from "../../Wrappers/QueryWrapper/QueryWrapper";
import { TQueryError } from "../../../models/common";
import { useSearchParams } from "react-router-dom";
import { DEFAULT_QUERY_NOTES, PAGE_QUERY } from "../../../consts";
import { NoteCard } from "../NoteCard/NoteCard";
import { getAllNotes } from "../../../utils";
import { Typography } from "antd";

export const NotesList = () => {
  const [params] = useSearchParams();

  const page = Number(params.get(PAGE_QUERY) || 1);

  const {
    isLoading,
    error,
    refetch,
    data = DEFAULT_QUERY_NOTES(page),
  } = useQuery({
    queryKey: [page],
    queryFn: () => getAllNotes(page),
  });

  const { notes = [], total, currentPage } = data;

  const afterDelete = () => {
    refetch();
  };

  return (
    <QueryWrapper isLoading={isLoading} error={error as TQueryError}>
      <div style={styles.container}>
        <div>
          <Typography.Title level={1}>All notes</Typography.Title>
        </div>
        {notes.length ? (
          <div style={styles.notesListContainer}>
            {notes.map((note) => (
              <NoteCard key={note.id} note={note} afterDelete={afterDelete} />
            ))}
          </div>
        ) : (
          <Typography.Title level={3}>
            No notes were found for your request!
          </Typography.Title>
        )}
        <Pagination
          allCount={total}
          currentPage={currentPage}
          show={!!notes.length}
        />
      </div>
    </QueryWrapper>
  );
};
