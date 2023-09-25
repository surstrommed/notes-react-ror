import { ROUTES } from "../consts";

export const getNoteLink = (noteId: number) => `${ROUTES.notes}/${noteId}`;

export const handleNoteCardContent = (content: string) =>
  content.length > 30 ? `${content.slice(0, 30).trim()}...` : content;
