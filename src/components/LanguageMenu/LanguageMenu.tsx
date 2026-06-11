import React, { useState } from "react";
import { Button, Menu, MenuItem } from "@material-ui/core";
import type { LanguageCode, LanguageMenuProps } from "../../types";
import styles from "./LanguageMenu.module.css";

const languages = [
  { value: "UA" as const, label: "Українська" },
  { value: "EN" as const, label: "English" },
  { value: "RU" as const, label: "Русский" },
];

export default function LanguageMenu({
  language,
  onLanguageChange,
  className,
  style,
}: LanguageMenuProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (selectedLanguage: LanguageCode) => {
    onLanguageChange(selectedLanguage);
    handleClose();
  };

  return (
    <>
      <Button
        aria-controls="language-menu"
        aria-haspopup="true"
        onClick={handleOpen}
        className={[styles.button, className].filter(Boolean).join(" ")}
        style={style}
      >
        {language}
      </Button>
      <Menu
        id="language-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {languages.map((item) => (
          <MenuItem
            key={item.value}
            selected={language === item.value}
            onClick={() => handleSelect(item.value)}
          >
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
