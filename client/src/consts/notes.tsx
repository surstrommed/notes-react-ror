import { MenuProps, Space } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { AfterDeleteFunction, TSnackbar } from "../models/common";
import { FAILED_NOTE_DELETED, SUCCESS_NOTE_DELETED } from "./messages";
import { NavigateFunction } from "react-router-dom";
import { ROUTES } from "./routes";
import { deleteNote } from "../utils";

export const DEFAULT_QUERY_NOTES = (page: number) => ({
  notes: [],
  total: 0,
  currentPage: page,
});

export const DEFAULT_QUERY_CATEGORIES = (page = 1) => ({
  categories: [],
  total: 0,
  currentPage: page,
});

export const manageNoteItems: (
  noteId: number,
  navigate: NavigateFunction,
  showSnackbar: (state: TSnackbar) => void,
  afterDelete?: AfterDeleteFunction
) => MenuProps["items"] = (noteId, navigate, showSnackbar, afterDelete) => [
  {
    label: (
      <Space>
        <EditOutlined /> Edit
      </Space>
    ),
    key: "0",
    onClick: () => {
      navigate(`${ROUTES.noteEdit}/${noteId}`);
    },
  },
  {
    label: (
      <Space>
        <DeleteOutlined /> Delete
      </Space>
    ),
    key: "1",
    onClick: async () => {
      try {
        await deleteNote(noteId);

        if (afterDelete) {
          afterDelete();
        }

        showSnackbar({
          message: SUCCESS_NOTE_DELETED,
        });
      } catch {
        showSnackbar({ message: FAILED_NOTE_DELETED, variant: "error" });
      }
    },
  },
];
