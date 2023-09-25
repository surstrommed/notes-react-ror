import { Dropdown, Button, Space } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
import { manageNoteItems } from "../../../consts";
import { useNavigate } from "react-router-dom";
import { styles } from ".";
import { TManageButton } from "../../../models/buttons";
import { useSnackBar } from "../../../hooks/useSnackBar";
import { manageCategoryItems } from "../../../consts/categories";

export const ManageButton = ({ type, id, afterDelete }: TManageButton) => {
  const navigate = useNavigate();
  const { showSnackbar } = useSnackBar();

  return (
    <Dropdown
      menu={{
        items:
          type === "note"
            ? manageNoteItems(id, navigate, showSnackbar, afterDelete)
            : manageCategoryItems(id, navigate, showSnackbar, afterDelete),
      }}
      trigger={["click"]}
      placement="bottom"
      arrow
    >
      <Button style={styles.button}>
        <Space>
          <CaretDownOutlined />
        </Space>
      </Button>
    </Dropdown>
  );
};
