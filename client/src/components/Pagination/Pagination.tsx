import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Pagination as AntdPagination, PaginationProps } from "antd";
import { styles } from ".";
import { ITEMS_PER_PAGE, PAGE_QUERY } from "../../consts";
import { TPagination } from "../../models/common";
import { urlBuilder } from "../../utils";
import { usePagination } from "../../hooks/usePagination";

export const Pagination = ({
  allCount,
  currentPage,
  show = true,
}: TPagination) => {
  const navigate = useNavigate();

  const onPageChange = () => {
    const routeWithPage = urlBuilder(
      window.location.href,
      PAGE_QUERY,
      "add",
      `${page}`
    );
    navigate(routeWithPage);
  };

  const { page, setPage, resetPagination } = usePagination({
    contentPerPage: ITEMS_PER_PAGE,
    count: allCount,
    currentPage,
    onPageChange,
  });

  useEffect(() => {
    resetPagination(allCount);
  }, [allCount]);

  const onPaginationChange: PaginationProps["onChange"] = (page: number) => {
    setPage(page);
  };

  if (!show) {
    return null;
  }

  return (
    <div style={styles.container}>
      <AntdPagination
        onChange={onPaginationChange}
        current={page}
        total={allCount}
        pageSize={ITEMS_PER_PAGE}
      />
    </div>
  );
};
