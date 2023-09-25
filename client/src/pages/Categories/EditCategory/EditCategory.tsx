import Header from "../../../components/Header/Header";
import { CategoryManageForm } from "../../../components/Categories/CategoryManageForm/CategoryManageForm";
import { PagesWrapper } from "../../../components/Wrappers/PagesWrapper/PagesWrapper";
import { useParams } from "react-router-dom";

export const EditCategory = () => {
  const { id } = useParams();

  return (
    <>
      <Header />
      <PagesWrapper>
        <CategoryManageForm type="edit" categoryId={id} />
      </PagesWrapper>
    </>
  );
};
