"use client";

import { useEffect, useState } from "react";
import { useSnackbar, SnackbarKey } from "notistack";
import { CloseOutlined } from "@ant-design/icons";
import { TSnackbar } from "../models/common";
import { Button } from "antd";
import { snackBarStyles } from ".";

export const useSnackBar = () => {
  const defaultVariant = "success";
  const [snackbar, setSnackbar] = useState<TSnackbar>({
    message: "",
    variant: defaultVariant,
  });
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const action = (key: SnackbarKey) => {
    const closeBar = () => {
      closeSnackbar(key);
    };
    return (
      <Button
        style={snackBarStyles.closeBtn}
        shape="round"
        icon={<CloseOutlined style={snackBarStyles.closeIcon} />}
        onClick={closeBar}
        ghost
      />
    );
  };

  const showSnackbar = (state: TSnackbar) => {
    setSnackbar({ ...state, variant: state?.variant || defaultVariant });
  };

  useEffect(() => {
    const { message, variant } = snackbar;
    if (message) {
      enqueueSnackbar(message, {
        variant,
        autoHideDuration: 3000,
        action,
      });
    }
  }, [snackbar]);

  return { showSnackbar };
};
