import { styles } from ".";
import { TPagesWrapper } from "../../../models/wrappers";

export const PagesWrapper = ({ children }: TPagesWrapper) => {
  return <div style={styles.container}>{children}</div>;
};
