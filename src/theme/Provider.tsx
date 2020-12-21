import { ThemeProvider } from "@material-ui/core";
import { theme } from "./theme";

export const Provider: preact.FunctionComponent = ({ children }) => (
  <ThemeProvider theme={theme} children={children} />
);

export default Provider;
