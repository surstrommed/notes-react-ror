import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { NavigateFunction } from "react-router-dom";
import { AfterDeleteFunction, TSnackbar } from "../models/common";
import { MenuProps, Space } from "antd";
import { ROUTES } from "./routes";
import { FAILED_CATEGORY_DELETED, SUCCESS_CATEGORY_DELETED } from "./messages";
import { deleteCategory } from "../utils";

export const manageCategoryItems: (
  categoryId: number,
  navigate: NavigateFunction,
  showSnackbar: (state: TSnackbar) => void,
  afterDelete?: AfterDeleteFunction
) => MenuProps["items"] = (categoryId, navigate, showSnackbar, afterDelete) => [
  {
    label: (
      <Space>
        <EditOutlined /> Edit
      </Space>
    ),
    key: "0",
    onClick: () => {
      navigate(`${ROUTES.categoryEdit}/${categoryId}`);
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
        await deleteCategory(categoryId);

        if (afterDelete) {
          afterDelete();
        }

        showSnackbar({
          message: SUCCESS_CATEGORY_DELETED,
        });
      } catch {
        showSnackbar({ message: FAILED_CATEGORY_DELETED, variant: "error" });
      }
    },
  },
];
