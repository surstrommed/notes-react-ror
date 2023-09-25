import { FormEvent, useEffect } from "react";
import { Button, Form, Input, Typography } from "antd";
import { useSnackBar } from "../../../hooks/useSnackBar";
import {
  FAILED_CREATE_CATEGORY,
  FAILED_EDIT_CATEGORY,
  SUCCESS_CREATE_CATEGORY,
  SUCCESS_EDIT_CATEGORY,
} from "../../../consts";
import { styles } from ".";
import { createCategory, editCategory, getCategoryById } from "../../../utils";
import {
  TCategoryManageData,
  TCategoryManageForm,
} from "../../../models/categories";
import { useQuery } from "@tanstack/react-query";
import { QueryWrapper } from "../../Wrappers/QueryWrapper/QueryWrapper";
import { TQueryError } from "../../../models/common";

type FormFields = TCategoryManageData;

export const CategoryManageForm = ({
  type,
  categoryId,
}: TCategoryManageForm) => {
  const [form] = Form.useForm<FormFields>();
  const { showSnackbar } = useSnackBar();

  const {
    isLoading,
    error,
    data: categoryData,
  } = useQuery({
    queryKey: [categoryId],
    queryFn: () => getCategoryById(Number(categoryId)),
  });

  useEffect(() => {
    if (categoryData?.category?.name) {
      form.setFieldValue("name", categoryData.category.name);
    }
  }, [categoryData?.category]);

  const name = Form.useWatch("name", form);

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const values = await form.validateFields();
      const { name } = values;

      if (type === "create") {
        await createCategory({
          name,
        });

        showSnackbar({
          message: SUCCESS_CREATE_CATEGORY,
        });
      } else if (categoryData?.category) {
        await editCategory(
          {
            name,
          },
          categoryData.category.id
        );

        showSnackbar({
          message: SUCCESS_EDIT_CATEGORY,
        });

        return;
      }

      form.resetFields();
    } catch {
      showSnackbar({
        message:
          type === "create" ? FAILED_CREATE_CATEGORY : FAILED_EDIT_CATEGORY,
        variant: "error",
      });
    }
  };

  const isManageBtnDisabled =
    type === "edit" && (!name || name === categoryData?.category?.name);

  return (
    <QueryWrapper
      isLoading={isLoading}
      error={error as TQueryError}
      data={type === "edit" && categoryData?.category}
    >
      <div style={styles.container}>
        <div>
          <Typography.Title level={1}>
            {type === "create" ? "Create" : "Edit"} category
          </Typography.Title>
        </div>
        <div>
          <Form
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            layout="vertical"
            style={styles.form}
            form={form}
            id="categoryManageForm"
          >
            <Form.Item<FormFields>
              name="name"
              label="Name"
              rules={[
                { required: true, message: "Please, fill Category name!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item>
              <Button
                form="categoryManageForm"
                key="submit"
                htmlType="submit"
                onClick={submitHandler}
                style={styles.manageCategoryBtn}
                disabled={isManageBtnDisabled}
              >
                {type === "create" ? "Create" : "Edit"}
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </QueryWrapper>
  );
};
