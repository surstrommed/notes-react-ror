import Header from "../../../components/Header/Header";
import { CategoryManageForm } from "../../../components/Categories/CategoryManageForm/CategoryManageForm";
import { PagesWrapper } from "../../../components/Wrappers/PagesWrapper/PagesWrapper";

export const CreateCategory = () => {
  return (
    <>
      <Header />
      <PagesWrapper>
        <CategoryManageForm type="create" />
      </PagesWrapper>
    </>
  );
};
