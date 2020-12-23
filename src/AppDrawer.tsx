import { FunctionComponent, h } from "preact";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";

import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

import { useAppBar } from "./contexts/app-bar";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import AppMenuItems from "./AppMenuItems";
// import { mainListItems, secondaryListItems } from "./listItems";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => (
  {
    drawerPaper: {
      position: "relative",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      whiteSpace: "nowrap",
      width: drawerWidth,
    },
    drawerPaperClose: {
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
    },
    fixedHeight: {
      height: 240,
    },
    paper: {
      display: "flex",
      flexDirection: "column",
      overflow: "auto",
      padding: theme.spacing(2),
    },
    toolbarIcon: {
      alignItems: "center",
      display: "flex",
      justifyContent: "flex-end",
      padding: "0 8px",
      ...theme.mixins.toolbar,
    },
  }
));

const AppDrawer: FunctionComponent = () => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const { isOpen, close } = useAppBar();
  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx(classes.drawerPaper, !isOpen && classes.drawerPaperClose),
      }}
      open={isOpen}
    >
      <div className={classes.toolbarIcon}>
        <IconButton onClick={close}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List><AppMenuItems /></List>
      <Divider />
    </Drawer>
  );
};

export default AppDrawer;
