import { useState, useRef } from "react";
import {
  Avatar,
  Stack,
  Typography,
  Chip,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import { useTranslation } from "react-i18next";

import MenuItem from "@mui/material/MenuItem";
import Popper from "@mui/material/Popper";
import LightModeIcon from "@mui/icons-material/LightMode";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import MenuList from "@mui/material/MenuList";
import Paper from "@mui/material/Paper";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import { Link, useNavigate } from "react-router-dom";
import { useStyles } from "./style";
import TextsmsRoundedIcon from "@mui/icons-material/TextsmsRounded";
// import { makeAxiosHttpClient } from "utils/factories/https/axiosHttpClientFactory";
import ForgetPassword from "./components/ForgetPassword";
import LogoutIcon from "@mui/icons-material/Logout";
// import { useInitConfig } from "providers/InitConfigProvider";
import LangMenu from "./components/LangMenu";
import MenuIcon from "@mui/icons-material/MenuOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import WalletIcon from "@mui/icons-material/Wallet";
import { TOKEN } from "core/utils/constants/storage";
import { useAppDispatch } from "presentation/redux/store";
import { ClientCookie } from "core/utils/tools";
import { toggleDrawer } from "presentation/features/drawer/drawerSlice";
import { useConfig } from "presentation/providers/ConfigProvide";
import { userLoginOutUseCase } from "core/di/useCases";
export default function AppBar() {
  const dispatch = useAppDispatch();
  const { changeTheme, settings } = useConfig();
  const [open, setOpen] = useState(false);
  const [openPasswordModal, setOpenPasswordModal] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const classes = useStyles();
  const handleChangeTheme = () => {
    settings.theme === "dark" ? changeTheme("light") : changeTheme("dark");
  };

  const handleToggle = () => {
    setOpen(!open);
  };
  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }
    setOpen(false);
  };
  const handleExit = () => {
    userLoginOutUseCase();
    window.location.replace("/auth/login");
  };
  const handleOpenPasswordModal = () => {
    setOpenPasswordModal(!openPasswordModal);
    setOpen(false);
  };

  return (
    <>
      <ForgetPassword
        open={openPasswordModal}
        onClose={() => setOpenPasswordModal(!openPasswordModal)}
      />
      <Box className={classes.appBarContainer}>
        <MuiAppBar
          position="sticky"
          className={`${classes.muiAppBar}`}
          elevation={0}
        >
          <Toolbar>
            <Grid container>
              <Grid
                item
                xs={12}
                md={12}
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
              >
                <Grid item className={classes.appBarLeft}>
                  <IconButton
                    onClick={() => dispatch(toggleDrawer())}
                    // className={classes.mobileMenuIcon}
                  >
                    <MenuIcon fontSize="medium" />
                  </IconButton>
                  <LangMenu />

                  <IconButton
                    sx={{ color: "gray.main", backgroundColor: "gray.light" }}
                    onClick={handleChangeTheme}
                    className="gray-btn-app-bar"
                  >
                    {settings.theme === "dark" ? (
                      <ModeNightIcon />
                    ) : (
                      <LightModeIcon />
                    )}
                  </IconButton>
                </Grid>
                <Grid item display="flex" columnGap="24px">
                  <Stack direction={"row"} className={classes.iconsContainer}>
                    <Chip
                      sx={{
                        display: { xs: "none", md: "flex" },
                      }}
                      icon={<WalletIcon color="primary" fontSize="small" />}
                      className={classes.wallet}
                      label={`${t("Sms panel inventory")} ${10000000} ${t(
                        "Toman"
                      )}`}
                    />
                  </Stack>
                  <Box>
                    <Box
                      className={classes.profile}
                      ref={anchorRef}
                      onClick={handleToggle}
                    >
                      <div>
                        <Avatar
                          // alt={profile.name}
                          className={classes.avatar}
                          // src={profile.pic}
                        >
                          ali
                        </Avatar>
                      </div>
                      <Box className={classes.profileInformation}>
                        <Box className={classes.userName}>
                          <Typography>ali</Typography>
                          <KeyboardArrowDownIcon />
                        </Box>
                        <Typography
                          sx={{
                            color: "gray.main",
                          }}
                          lineHeight={1}
                          fontSize="12px"
                        >
                          {/* {profile.user} */}
                          admin
                        </Typography>
                      </Box>
                    </Box>
                    <Popper
                      open={open}
                      anchorEl={anchorRef.current}
                      role={undefined}
                      placement="bottom-start"
                      transition
                      disablePortal
                    >
                      {({ TransitionProps, placement }) => (
                        <Grow
                          {...TransitionProps}
                          style={{
                            transformOrigin:
                              placement === "bottom-start"
                                ? "left top"
                                : "left bottom",
                          }}
                        >
                          <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                              <MenuList
                                autoFocusItem={open}
                                id="composition-menu"
                                aria-labelledby="composition-button"
                              >
                                <MenuItem divider>
                                  <ListItemIcon>
                                    <TextsmsRoundedIcon />
                                  </ListItemIcon>
                                  <ListItemText
                                    primary={t("Sms panel inventory")}
                                    secondary={`${1000000} ${t("Toman")}`}
                                  />
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                  <Link to="/security/profile">
                                    <Typography color="grey">
                                      {t("Profile")}
                                    </Typography>
                                  </Link>
                                </MenuItem>
                                <MenuItem onClick={handleOpenPasswordModal}>
                                  <Typography color="grey">
                                    {t("ChangePassword")}
                                  </Typography>
                                </MenuItem>
                                <MenuItem
                                  className={classes.logOut}
                                  onClick={handleExit}
                                >
                                  <LogoutIcon fontSize="small" />
                                  {t("Logout")}
                                </MenuItem>
                              </MenuList>
                            </ClickAwayListener>
                          </Paper>
                        </Grow>
                      )}
                    </Popper>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </MuiAppBar>
      </Box>
    </>
  );
}
