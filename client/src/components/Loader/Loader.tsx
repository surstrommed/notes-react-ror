import { Audio } from "react-loader-spinner";
import { styles } from ".";

export const Loader = () => (
  <div style={styles.container}>
    <Audio
      height="100"
      width="100"
      color="#000080"
      ariaLabel="audio-loading"
      wrapperClass="wrapper-class"
      visible={true}
    />
  </div>
);
