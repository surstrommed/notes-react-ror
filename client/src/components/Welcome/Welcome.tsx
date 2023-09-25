import { useNavigate } from "react-router-dom";
import { styles } from ".";
import { Button, Typography } from "antd";
import { ROUTES } from "../../consts";

export const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <Typography.Title level={1}>
        Welcome to <span style={styles.projectName}>My notes</span> website!
      </Typography.Title>
      <div style={styles.buttons}>
        <Button
          type="primary"
          onClick={() => {
            navigate(ROUTES.notes);
          }}
        >
          Go to All notes
        </Button>
        <Button
          type="primary"
          onClick={() => {
            navigate(ROUTES.categories);
          }}
        >
          Go to All categories
        </Button>
      </div>
    </div>
  );
};
