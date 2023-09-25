import { useEffect, useState } from "react";
import { TUsePagination } from "../models/common";

export const usePagination: TUsePagination = ({
  contentPerPage,
  count,
  currentPage,
  onPageChange,
}) => {
  const [page, setPage] = useState<number>(currentPage);
  const [pageCount, setPageCount] = useState<number>(
    Math.ceil(count / contentPerPage)
  );

  const lastContentIndex = page * contentPerPage;
  const firstContentIndex = lastContentIndex - contentPerPage;

  const changePage = (direction: boolean) => {
    setPage((state) => {
      if (direction) {
        if (state === pageCount) {
          return state;
        }
        return state + 1;
      } else {
        if (state === 1) {
          return state;
        }
        return state - 1;
      }
    });
  };

  const setPageSafe = (num: number) => {
    if (num > pageCount) {
      setPage(pageCount);
    } else if (num < 1 || pageCount === 0) {
      setPage(1);
    } else {
      setPage(num);
    }
  };

  const resetPagination = (contentCount: number) => {
    setPageCount(Math.ceil(contentCount / contentPerPage));
  };

  useEffect(() => {
    onPageChange(page);
  }, [page]);

  return {
    totalPages: pageCount,
    nextPage: () => changePage(true),
    prevPage: () => changePage(false),
    setPage: setPageSafe,
    resetPagination,
    firstContentIndex,
    lastContentIndex,
    page,
  };
};
