import { FormEvent, useEffect } from "react";
import { Button, Form, Input, Select, Typography } from "antd";
import { useSnackBar } from "../../../hooks/useSnackBar";
import {
  DEFAULT_QUERY_CATEGORIES,
  FAILED_CREATE_NOTE,
  FAILED_EDIT_NOTE,
  ROUTES,
  SUCCESS_CREATE_NOTE,
  SUCCESS_EDIT_NOTE,
} from "../../../consts";
import { useNavigate } from "react-router-dom";
import { TNoteManageData, TNoteManageForm } from "../../../models/notes";
import { styles } from ".";
import {
  createNote,
  editNote,
  getAllCategories,
  getNoteById,
} from "../../../utils";
import { useQuery } from "@tanstack/react-query";
import { QueryWrapper } from "../../Wrappers/QueryWrapper/QueryWrapper";
import { TQueryError } from "../../../models/common";

type FormFields = TNoteManageData;

export const NoteManageForm = ({ type, noteId }: TNoteManageForm) => {
  const [form] = Form.useForm<FormFields>();
  const { showSnackbar } = useSnackBar();
  const navigate = useNavigate();

  const {
    isLoading: categoryLoading,
    error: categoryError,
    data: categoriesData = DEFAULT_QUERY_CATEGORIES(),
  } = useQuery({
    queryKey: [`categories_${noteId}`],
    queryFn: () => getAllCategories(),
  });

  const {
    isLoading: noteLoading,
    error: noteError,
    data: note,
  } = useQuery({
    queryKey: [`note_${noteId}`],
    queryFn: () => getNoteById(noteId),
  });

  useEffect(() => {
    if (note?.title) {
      form.setFieldValue("title", note.title);
    }
    if (note?.content) {
      form.setFieldValue("content", note.content);
    }
    if (note?.category_id) {
      form.setFieldValue("category_id", note.category_id);
    }
  }, [note]);

  const title = Form.useWatch("title", form);
  const content = Form.useWatch("content", form);
  const category_id = Form.useWatch("category_id", form);

  const { TextArea } = Input;

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const values = await form.validateFields();
      const { title, content, category_id } = values;

      if (type === "create") {
        await createNote({
          title,
          content,
          category_id,
        });

        showSnackbar({
          message: SUCCESS_CREATE_NOTE,
        });
      } else if (note) {
        await editNote(
          {
            title,
            content,
            category_id,
          },
          note.id
        );

        showSnackbar({
          message: SUCCESS_EDIT_NOTE,
        });

        navigate(`${ROUTES.notes}/${note.id}`);
        return;
      }

      form.resetFields();
    } catch {
      showSnackbar({
        message: type === "create" ? FAILED_CREATE_NOTE : FAILED_EDIT_NOTE,
        variant: "error",
      });
    }
  };

  const isManageBtnDisabled =
    type === "edit" &&
    (!title || title === note?.title) &&
    (!content || content === note?.content) &&
    (!category_id || Number(category_id) === note?.category_id);

  const { categories } = categoriesData;

  return (
    <QueryWrapper
      isLoading={noteLoading}
      error={(categoryError || noteError) as TQueryError}
      data={type === "edit" && note}
    >
      <div style={styles.container}>
        <div>
          <Typography.Title level={1}>
            {type === "create" ? "Create" : "Edit"} note
          </Typography.Title>
        </div>
        <div>
          <Form
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            layout="vertical"
            style={styles.form}
            form={form}
            id="noteManageForm"
          >
            <Form.Item<FormFields>
              name="title"
              label="Title"
              rules={[{ required: true, message: "Please, fill Note title!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item<FormFields>
              name="content"
              label="Content"
              rules={[
                { required: true, message: "Please, fill Note content!" },
              ]}
            >
              <TextArea rows={4} style={styles.contentTextarea} />
            </Form.Item>
            <Form.Item<FormFields>
              name="category_id"
              label="Category"
              rules={[
                { required: true, message: "Please, fill Note category!" },
              ]}
            >
              <Select
                placeholder="Category for note"
                allowClear
                loading={categoryLoading}
              >
                {categories.map((category) => (
                  <Select.Option value={category.id} key={category.id}>
                    {category.name}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item>
              <Button
                form="noteManageForm"
                key="submit"
                htmlType="submit"
                onClick={submitHandler}
                style={styles.manageNoteBtn}
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
