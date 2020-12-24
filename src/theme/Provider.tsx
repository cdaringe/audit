import { ThemeProvider } from "@material-ui/core";
import { FC } from "react";
import { theme } from "./theme";

export const Provider: FC = ({ children }) => (
  <ThemeProvider theme={theme} children={children} />
);

export default Provider;
