import { Button, Typography } from "antd";
import { styles } from ".";
import Header from "../../components/Header/Header";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../consts";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div style={styles.banner}>
        <Typography.Title level={1}>Page 404</Typography.Title>
        <Typography.Title level={3}>This page was not found!</Typography.Title>
        <Button
          onClick={() => {
            navigate(ROUTES.main);
          }}
        >
          Go home
        </Button>
      </div>
    </>
  );
};
