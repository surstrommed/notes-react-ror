import { SnackbarMessage, VariantType } from "notistack";

export type TQueryError = {
  message: string;
};

export type TPagination = {
  allCount: number;
  currentPage: number;
  show: boolean;
};

export type TUsePagination = (props: {
  contentPerPage: number;
  count: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}) => {
  page: number;
  totalPages: number;
  resetPagination: (contentCount: number) => void;
  firstContentIndex: number;
  lastContentIndex: number;
  nextPage: () => void;
  prevPage: () => void;
  setPage: (page: number) => void;
};

export type TSnackbar = {
  message: SnackbarMessage;
  variant?: VariantType;
};

export type TManageFormType = "create" | "edit";

export type AfterDeleteFunction = () => void;
