import { Button, Typography } from "antd";
import { styles } from ".";
import { TQueryWrapper } from "../../../models/wrappers";
import { Loader } from "../../Loader/Loader";
import { ROUTES } from "../../../consts";
import { useNavigate } from "react-router-dom";

export const QueryWrapper = ({
  isLoading,
  error,
  data,
  children,
}: TQueryWrapper) => {
  const navigate = useNavigate();

  if (isLoading) {
    return <Loader />;
  }

  if (error)
    return (
      <div style={styles.banner}>
        <Typography.Title level={1}>Oops..</Typography.Title>
        <Typography.Title level={3}>
          An error has occurred: {error.message}
        </Typography.Title>
      </div>
    );

  if (data === null) {
    return (
      <div style={styles.banner}>
        <Typography.Title level={1}>Oops..</Typography.Title>
        <Typography.Title level={3}>
          There is no data to display, please try again!
        </Typography.Title>
        <div style={styles.buttonsWrapper}>
          <Button
            onClick={() => {
              navigate(ROUTES.main);
            }}
          >
            Go home
          </Button>
          <Button
            onClick={() => {
              navigate(0);
            }}
          >
            Reload
          </Button>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};
