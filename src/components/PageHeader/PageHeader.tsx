import React from "react";
import { AppBar, Box, Container } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import LanguageMenu from "../LanguageMenu";
import type { PageHeaderProps } from "../../types";
import styles from "./PageHeader.module.css";

export default function PageHeader({
  t,
  language,
  onLanguageChange,
  logoTo = "/login",
}: PageHeaderProps) {
  return (
    <AppBar position="static" elevation={0} className={styles.appBar}>
      <Container maxWidth="lg" className={styles.container}>
        <RouterLink to={logoTo} className={styles.logo}>
          voopty
        </RouterLink>
        <Box className={styles.spacer} />
        <Box className={styles.navGroup}>
          <RouterLink to="/register" className={styles.navLink}>
            {t.nav.join}
          </RouterLink>
          <RouterLink to="/login" className={styles.navLink}>
            {t.nav.login}
          </RouterLink>
          <LanguageMenu
            language={language}
            onLanguageChange={onLanguageChange}
            className={styles.navLink}
          />
        </Box>
      </Container>
    </AppBar>
  );
}
