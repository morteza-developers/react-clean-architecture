import { memo, useState } from "react";
import clsx from "clsx";
// providers

// components
import Drawer from "@mui/material/Drawer";
import Hidden from "@mui/material/Hidden";
import List from "@mui/material/List";

import { NavLink } from "react-router-dom";
// icons
import { useTranslation } from "react-i18next";
import { useStyles } from "./NavigationDrawer.styles";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import {
  Collapse,
  Divider,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "redux/store";
import MiniLogo from "assets/icons/drawerLogo.svg?url";
import TypeLogo from "assets/icons/logoNameDrawer.svg?url";
import useLocationEffect from "presentation/hook/locationEffect";
import sideBarItem from "./sideBarItem";
import DrawerHeader from "./drawerHeader";
import { toggleDrawer } from "presentation/features/drawer/drawerSlice";
import { errorPlaceHolderImage } from "core/utils/tools";
import { getDrawer } from "presentation/features/drawer/selectors";
/**
 * @component NavigationDrawer
 */
const DrawerLing = React.forwardRef((p, ref) => (
  <NavLink {...p} ref={ref} end />
));
function NavigationDrawer() {
  const { open: openDrawer } = useAppSelector(getDrawer);
  // const { logo, logo3 } = useInitConfig();
  const dispatch = useAppDispatch();
  const matches = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const { t } = useTranslation();
  // const { menu } = useInitConfig();
  const [openMenu, setOpenMenu] = useState(-1);

  const handleToggleMenu = (Slug) => {
    if (!openDrawer) {
      dispatch(toggleDrawer());
    }
    setOpenMenu((s) => {
      if (s == Slug) return undefined;
      return Slug;
    });
  };

  const classes = useStyles();

  // useLayoutEffect(())

  useLocationEffect(() => {
    if (openDrawer && matches) {
      dispatch(toggleDrawer());
      window.scrollTo(0, 0);
    }
  });
  const renderCollapseIcon = (collapseOpen = false) => {
    if (!openDrawer) return null;
    return (
      <KeyboardArrowLeftIcon
        color="action"
        sx={(theme) => {
          return {
            transform: collapseOpen
              ? "rotate(-90deg)"
              : `rotate(${theme.direction == "rtl" ? "0" : "180deg"})`,
            transition: "0.2s",
          };
        }}
        className={classes.icon}
      />
    );
  };
  const sxStyle = { display: openDrawer ? "flex" : "none" };

  const items = () => {
    return sideBarItem.map((item, index) => {
      const isOpen = openMenu == item.id;
      if (!item.req && item?.child?.length > 0) {
        return (
          <div key={item.id} className={classes.mainList}>
            <ListItemButton
              className={classes.listItem}
              onClick={() => handleToggleMenu(item.id)}
            >
              <ListItemIcon className={classes.icon}>{item.icon}</ListItemIcon>
              <ListItemText
                sx={sxStyle}
                primaryTypographyProps={{ fontWeight: 600 }}
                primary={t(item.title)}
              />
              {renderCollapseIcon(isOpen)}
            </ListItemButton>
            <Collapse in={isOpen} timeout="auto">
              <List
                component="div"
                disablePadding
                className={classes.subMenuContainer}
              >
                {item.child.map((childItem) => {
                  return (
                    <ListItemButton
                      key={childItem.id}
                      selected={false}
                      component={DrawerLing}
                      to={childItem.href}
                      className={`${classes.listItem}`}
                      sx={sxStyle}
                    >
                      <ListItemText
                        sx={sxStyle}
                        className={classes.listItemText}
                        primary={t(childItem.title)}
                      />
                    </ListItemButton>
                  );
                })}
              </List>
            </Collapse>
          </div>
        );
      }
      return (
        <ListItemButton
          className={classes.listItemSingle}
          selected={false}
          component={DrawerLing}
          to={item.href}
          key={item.id}
        >
          <ListItemIcon className={classes.icon}>{item.icon}</ListItemIcon>
          <ListItemText
            sx={sxStyle}
            primaryTypographyProps={{ fontWeight: 600 }}
            className={classes.listItemTextSingle}
            primary={t(item.title)}
          />
        </ListItemButton>
      );
    });
  };
  const renderDrawerContent = (
    <div className={classes.content}>
      <DrawerHeader className={classes.menuIconWrapper}>
        <img
          // src={logo}
          className={openDrawer ? classes.typeLogo : classes.displayNone}
          alt=""
          {...errorPlaceHolderImage(TypeLogo)}
        />

        <img
          // src={logo3}
          alt=""
          className={openDrawer ? classes.displayNone : classes.miniLogo}
          {...errorPlaceHolderImage(MiniLogo)}
        />
      </DrawerHeader>
      <Divider></Divider>
      <List className={classes.list}>{items()}</List>
    </div>
  );

  const rootClasses = clsx(classes.root, {
    [classes.rootFolded]: !openDrawer,
  });
  const drawerClasses = clsx(classes.drawerPaper, {
    [classes.drawerFolded]: !openDrawer,
    [classes.drawerFoldedOpen]: openDrawer,
    [classes.drawerFoldedClose]: openDrawer,
  });

  return (
    <div className={rootClasses}>
      <Hidden mdUp>
        <Drawer
          elevation={0}
          variant="temporary"
          disablePortal
          open={openDrawer}
          onClose={() => dispatch(toggleDrawer())}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {renderDrawerContent}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          // onMouseEnter={() => dispatch(foldedDrawerEnter())}
          // onMouseLeave={() => dispatch(foldedDrawerLeave())}
          PaperProps={{
            elevation: 0,
            variant: "elevation",
          }}
          classes={{
            paper: drawerClasses,
          }}
          variant="permanent"
          open
        >
          {renderDrawerContent}
        </Drawer>
      </Hidden>
    </div>
  );
}

export default memo(NavigationDrawer);
