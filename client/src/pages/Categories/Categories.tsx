import Header from "../../components/Header/Header";
import { CategoriesList } from "../../components/Categories/CategoriesList/CategoriesList";
import { PagesWrapper } from "../../components/Wrappers/PagesWrapper/PagesWrapper";

export const Categories = () => {
  return (
    <>
      <Header />
      <PagesWrapper>
        <CategoriesList />
      </PagesWrapper>
    </>
  );
};
