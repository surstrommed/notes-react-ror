import { Link, useLocation, useNavigate } from "react-router-dom";
import { styles } from ".";
import { Col, Row, Layout, Button } from "antd";
import { ROUTES, PROJECT_NAME } from "../../consts";

const Header = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <Layout.Header style={styles.header}>
      <Row style={styles.rowContainer}>
        <Col span={6} style={styles.headerItemContainer}>
          <Link to={ROUTES.main} style={styles.logo}>
            {PROJECT_NAME}
          </Link>
        </Col>
        <Col span={18} style={styles.listContainer}>
          {pathname === ROUTES.notes && (
            <Button
              ghost
              onClick={() => {
                navigate(ROUTES.noteCreate);
              }}
            >
              Create new note
            </Button>
          )}
          {pathname === ROUTES.categories && (
            <Button
              ghost
              onClick={() => {
                navigate(ROUTES.categoryCreate);
              }}
            >
              Create new category
            </Button>
          )}
          {pathname !== ROUTES.notes && (
            <Button
              type="primary"
              onClick={() => {
                navigate(ROUTES.notes);
              }}
            >
              All notes
            </Button>
          )}
          {pathname !== ROUTES.categories && (
            <Button
              type="primary"
              onClick={() => {
                navigate(ROUTES.categories);
              }}
            >
              All categories
            </Button>
          )}
        </Col>
      </Row>
    </Layout.Header>
  );
};

export default Header;
