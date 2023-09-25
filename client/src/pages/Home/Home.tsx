import Header from "../../components/Header/Header";
import { Welcome } from "../../components/Welcome/Welcome";
import { PagesWrapper } from "../../components/Wrappers/PagesWrapper/PagesWrapper";

export const Home = () => {
  return (
    <>
      <Header />
      <PagesWrapper>
        <Welcome />
      </PagesWrapper>
    </>
  );
};
