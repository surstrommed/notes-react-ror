import { useQuery } from "@tanstack/react-query";
import { styles } from ".";
import { Pagination } from "../../Pagination/Pagination";
import { QueryWrapper } from "../../Wrappers/QueryWrapper/QueryWrapper";
import { TQueryError } from "../../../models/common";
import { useSearchParams } from "react-router-dom";
import { DEFAULT_QUERY_CATEGORIES, PAGE_QUERY } from "../../../consts";
import { getAllCategories } from "../../../utils";
import { CategoryCard } from "../CategoryCard/CategoryCard";
import { Typography } from "antd";

export const CategoriesList = () => {
  const [params] = useSearchParams();

  const page = Number(params.get(PAGE_QUERY) || 1);

  const {
    isLoading,
    error,
    data = DEFAULT_QUERY_CATEGORIES(page),
    refetch,
  } = useQuery({
    queryKey: [page],
    queryFn: () => getAllCategories(page),
  });

  const { categories = [], total, currentPage } = data;

  const afterDelete = () => {
    refetch();
  };

  return (
    <QueryWrapper isLoading={isLoading} error={error as TQueryError}>
      <div style={styles.container}>
        <div>
          <Typography.Title level={1}>All categories</Typography.Title>
        </div>
        {categories.length ? (
          <div style={styles.categoriesListContainer}>
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                afterDelete={afterDelete}
              />
            ))}
          </div>
        ) : (
          <Typography.Title level={3}>
            No categories were found for your request!
          </Typography.Title>
        )}
        <Pagination
          allCount={total}
          currentPage={currentPage}
          show={!!categories.length}
        />
      </div>
    </QueryWrapper>
  );
};
