import React from "react";
import {
  Box,
  Button,
  Paper,
  SvgIcon,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";
import AppTextField from "./components/AppTextField";
import MarketingPanel from "./components/MarketingPanel";
import PageHeader from "./components/PageHeader";
import type { LoginRightPanelProps, PageProps } from "./types";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    minHeight: "100vh",
  },
  main: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: theme.spacing(3),
    padding: theme.spacing(4, 2),
    maxWidth: 1440,
    margin: "0 auto",
    [theme.breakpoints.up("lg")]: {
      gridTemplateColumns: "0.9fr 1.1fr",
      gap: theme.spacing(4),
      padding: theme.spacing(6, 4),
    },
  },
  leftPanel: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
}));

const RightPanel: React.FC<LoginRightPanelProps> = ({
  t,
  onSubmit,
}) => (
  <Paper elevation={0} style={{ padding: 32, borderRadius: 24, backgroundColor: "#ffffff", boxShadow: "0 24px 80px rgba(17,24,39,0.08)" }}>
    <Typography style={{ fontWeight: 900, fontSize: 28, marginBottom: 8 }}>{t.login.form.title}</Typography>
    <Typography style={{ color: "#667085", marginBottom: 24 }}>{t.login.form.subtitle}</Typography>

    <Button fullWidth style={{ border: "1px solid rgba(17,24,39,0.12)", textTransform: "none", borderRadius: 16, justifyContent: "flex-start", padding: "10px 16px", marginBottom: 24 }}>
      <SvgIcon style={{ marginRight: 12, color: "#ff8a00" }}>
        <path d="M21.35 11.1h-9.18v2.92h5.26c-.22 1.35-1.04 2.49-2.24 3.25v2.7h3.63c2.13-1.97 3.35-4.86 3.35-8.87 0-.6-.06-1.18-.16-1.74z" />
        <path d="M12.17 22c2.94 0 5.4-.98 7.2-2.66l-3.63-2.7c-1.01.68-2.3 1.08-3.57 1.08-2.75 0-5.09-1.86-5.93-4.35H2.28v2.73C4.06 19.98 7.8 22 12.17 22z" />
        <path d="M6.24 13.37c-.24-.72-.38-1.49-.38-2.37s.14-1.65.38-2.37V5.9H2.28C1.35 7.56.78 9.51.78 11.99s.57 4.43 1.5 6.09l3.96-2.71z" />
        <path d="M12.17 4.68c1.6 0 3.03.55 4.15 1.64l3.11-3.11C17.57 1.45 14.99.5 12.17.5 7.8.5 4.06 2.52 2.28 5.91l3.96 2.73c.84-2.49 3.18-4.35 5.93-4.35z" />
      </SvgIcon>
      {t.login.form.googleButton}
    </Button>

    <Box style={{ display: "flex", alignItems: "center", margin: "16px 0", color: "#667085", fontSize: 13 }}>
      <Box style={{ flexGrow: 1, height: 1, backgroundColor: "rgba(17,24,39,0.12)" }} />
      <Box style={{ margin: "0 8px" }}>{t.login.form.divider}</Box>
      <Box style={{ flexGrow: 1, height: 1, backgroundColor: "rgba(17,24,39,0.12)" }} />
    </Box>

    <form onSubmit={onSubmit}>
      <AppTextField
        name="email"
        label={t.login.form.email.label}
        placeholder={t.login.form.email.placeholder}
        startIcon={
          <SvgIcon>
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
          </SvgIcon>
        }
      />
      <AppTextField
        name="password"
        label={t.login.form.password.label}
        placeholder={t.login.form.password.placeholder}
        passwordToggle
      />
      <RouterLink to="/forgot-password" style={{ display: "block", marginTop: 12, color: "#ff8a00", fontWeight: 700, textDecoration: "none" }}>
        {t.login.form.forgotPassword}
      </RouterLink>
      <Button type="submit" variant="contained" color="primary" fullWidth style={{ borderRadius: 16, height: 52, textTransform: "uppercase", fontWeight: 900, marginTop: 16, boxShadow: "0 14px 30px rgba(255,138,0,0.32)" }}>
        {t.login.form.submit}
      </Button>
    </form>

    <Typography style={{ marginTop: 24, color: "#667085", fontSize: 14, textAlign: "center" }}>
      {t.login.form.noAccess}{" "}
      <RouterLink to="/register" style={{ fontWeight: 700, color: "#ff8a00", textDecoration: "none" }}>
        {t.login.form.joinLink}
      </RouterLink>
    </Typography>
  </Paper>
);

export default function LoginPage({ t, language, onLanguageChange }: PageProps) {
  const classes = useStyles();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    console.log({ email: form.get("email"), password: form.get("password") });
  };

  return (
    <Box className={classes.root}>
      <PageHeader t={t} language={language} onLanguageChange={onLanguageChange} />
      <Box className={classes.main}>
        <MarketingPanel panel={t.login.panel} className={classes.leftPanel} />
        <RightPanel
          t={t}
          onSubmit={handleSubmit}
        />
      </Box>
    </Box>
  );
}
