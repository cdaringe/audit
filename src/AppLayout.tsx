import { FunctionComponent, h } from "preact";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline/index";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
}));

type AppLayoutProps = {
  AppBar: FunctionComponent;
  AppDrawer: FunctionComponent;
};
const AppLayout: FunctionComponent<AppLayoutProps> = (
  { children, AppBar, AppDrawer },
) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar />
      <AppDrawer />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        {children}
      </main>
    </div>
  );
};

export default AppLayout;
