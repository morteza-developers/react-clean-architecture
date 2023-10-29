import { Button, Menu, MenuItem, Typography } from "@mui/material";
// import { useInitConfig } from "providers/InitConfigProvider";
import { useState } from "react";
import LanguageIcon from "@mui/icons-material/Language";
import { useTranslation } from "react-i18next";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useConfig } from "presentation/providers/ConfigProvide";
import i18n from "core/lang";
const langs = [
  { slug: "fa", dir: "rtl", title: "فارسی" },
  { slug: "en", dir: "ltr", title: "english" },
];
const LangMenu = () => {
  const { t } = useTranslation();
  // const {
  //   lang: { langs },
  // } = useInitConfig();
  const { settings, changeLanguage } = useConfig();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLanguage = (item: any) => {
    if (item.slug == "fa") {
      changeLanguage("fa-IR");
    } else {
      changeLanguage("en-US");
    }
    handleClose();
  };
  if (langs.length <= 1) return null;
  return (
    <div>
      <Button
        sx={{
          color: "gray.main",
          backgroundColor: "gray.light",
          borderRadius: "32px",
          columnGap: "5px",
        }}
        endIcon={<KeyboardArrowDownIcon />}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <LanguageIcon />
        <Typography>{t(i18n.language)}</Typography>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onChange={handleLanguage}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {langs.map((item) => {
          return (
            <MenuItem onClick={() => handleLanguage(item)} key={item.slug}>
              {item.title}
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
};

export default LangMenu;
